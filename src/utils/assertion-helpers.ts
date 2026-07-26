import { assert } from "chai";
import { type Response } from "supertest";
import { AssertionCollector } from "../report/index.js";
import { TestExecutionContext } from "../context/index.js";

class AssertionHelpers {
  static assertStatusCode(
    response: Response,
    expectedStatusCode: number,
    message?: string,
  ) {
    try {
      assert.equal(
        response.status,
        expectedStatusCode,
        message ||
          `Expected status code to be ${expectedStatusCode} but got ${response.status}`,
      );

      AssertionCollector.record({
        name: "Status Code Assertion",
        expected: expectedStatusCode,
        actual: response.status,
        status: "PASS",
        traceId: TestExecutionContext.get()?.traceId || "",
      });
    } catch (error) {
      AssertionCollector.record({
        name: "Status Code Assertion",
        expected: expectedStatusCode,
        actual: response.status,
        status: "FAIL",
        message: (error as Error).message,
        traceId: TestExecutionContext.get()?.traceId || "",
      });

      throw error;
    }
  }

  static assertEqual(actual: any, expected: any, message?: string) {
    assert.equal(
      actual,
      expected,
      message || `Expected ${expected} but got ${actual}`,
    );
  }
}

export default AssertionHelpers;
