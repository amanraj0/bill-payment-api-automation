import { AsyncLocalStorage } from "node:async_hooks";

export interface TestContext {
  suiteName: string;
  testName: string;
  testContext: Mocha.Context;
  traceId: string;
}

export class TestExecutionContext {
  private static readonly storage = new AsyncLocalStorage<TestContext>();

  static set(context: TestContext): void {
    this.storage.enterWith(context);
  }

  static get(): TestContext | undefined {
    return this.storage.getStore();
  }
}
