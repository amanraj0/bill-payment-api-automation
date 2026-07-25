import { Log } from "../utils/index.js";
import { TestExecutionContext } from "../context/index.js";
import { getUUID } from "../utils/index.js";

export const mochaHooks = {
  beforeEach(this: Mocha.Context) {
    TestExecutionContext.set({
      suiteName: this.currentTest?.parent?.title ?? "",
      testName: this.currentTest?.title.split("@")[0] ?? "",
      testContext: this,
      traceId: getUUID(),
    });

    const context = TestExecutionContext.get();

    Log.info(
      `Execution Started for Test : ${context?.testName ?? "N/A"}, [TraceId : ${context?.traceId ?? "N/A"}]`,
    );
  },

  afterEach(this: Mocha.Context) {
    const context = TestExecutionContext.get();

    switch (context?.testContext.currentTest?.state) {
      case "passed":
        Log.info(
          `Execution Completed Successfully for Test : ${context?.testName ?? "N/A"}, [TraceId : ${context?.traceId ?? "N/A"}]`,
        );
        break;
      case "failed":
        Log.error(
          `Execution Failed for Test : ${context?.testName ?? "N/A"},
       [TraceId : ${context?.traceId ?? "N/A"}],
       Error : ${context?.testContext.currentTest?.err?.message ?? "N/A"},`,
        );
        break;
    }
  },
};
