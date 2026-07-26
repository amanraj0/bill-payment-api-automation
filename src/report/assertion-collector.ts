import { TestExecutionContext } from "../context/index.js";
import { type AssertionResult } from "./types.js";

export class AssertionCollector {
  static record(assertion: AssertionResult): void {
    const context = TestExecutionContext.get();

    if (!context) {
      return;
    }

    context.assertions.push(assertion);
  }
}
