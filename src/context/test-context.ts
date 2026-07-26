import { AsyncLocalStorage } from "node:async_hooks";
import { type TestContext } from "./index.js";

export class TestExecutionContext {
  private static readonly storage = new AsyncLocalStorage<TestContext>();

  static set(context: TestContext): void {
    this.storage.enterWith(context);
  }

  static get(): TestContext | undefined {
    return this.storage.getStore();
  }
}
