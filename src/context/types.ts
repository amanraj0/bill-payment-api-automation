import { type AssertionResult } from "../report/index.js";

export interface TestContext {
  suiteName: string;
  testName: string;
  testContext: Mocha.Context;
  traceId: string;
  assertions: AssertionResult[];
}
