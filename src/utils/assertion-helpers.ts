import { assert } from "chai";
import { type Response } from "supertest";
import { AssertionCollector } from "../report/index.js";
import { TestExecutionContext } from "../context/index.js";
import type { SchemaObject } from "ajv";
import { SchemaValidatior } from "./index.js";

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
    try {
      assert.equal(
        actual,
        expected,
        message || `Expected ${expected} but got ${actual}`,
      );

      AssertionCollector.record({
        name: message || "Equality Assertion",
        expected,
        actual,
        status: "PASS",
        traceId: TestExecutionContext.get()?.traceId || "",
      });
    } catch (error) {
      AssertionCollector.record({
        name: message || "Equality Assertion",
        expected,
        actual,
        status: "FAIL",
        message: (error as Error).message,
        traceId: TestExecutionContext.get()?.traceId || "",
      });

      throw error;
    }
  }

  static assertJsonSchema(
    response: Response,
    schema: SchemaObject,
    schemaName: string,
  ): void {
    try {
      const result = SchemaValidatior.validate({
        payload: response.body,
        schema,
      });

      if (!result.valid) {
        const errorMessage =
          result.errors
            ?.map((error) => {
              const path = error.instancePath || "/";
              return `${path}: ${error.message}`;
            })
            .join("\n") ?? "Schema validation failed";

        throw new Error(errorMessage);
      }
      AssertionCollector.record({
        name: schemaName,
        expected: "Response should match JSON schema",
        actual: "Schema validation passed",
        status: "PASS",
        traceId: TestExecutionContext.get()?.traceId || "",
      });
    } catch (error) {
      AssertionCollector.record({
        name: schemaName,
        expected: "Response should match JSON schema",
        actual: "Schema validation failed",
        status: "FAIL",
        message: (error as Error).message,
        traceId: TestExecutionContext.get()?.traceId || "",
      });

      throw error;
    }
  }
}

export default AssertionHelpers;
