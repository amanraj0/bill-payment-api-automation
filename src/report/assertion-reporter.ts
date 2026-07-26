import addContext from "mochawesome/addContext.js";
import { TestExecutionContext } from "../context/index.js";

export class AssertionReporter {
  static publish(): void {
    const context = TestExecutionContext.get();

    if (!context || !context.assertions || context.assertions.length === 0) {
      return;
    }

    addContext(context.testContext, {
      title: "Assertions",
      value: context.assertions,
    });
  }
}
