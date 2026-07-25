import { assert } from "chai";
import { type Response } from "supertest";

class AssertionHelpers {
  static assertStatusCode(
    response: Response,
    expectedStatusCode: number,
    message?: string,
  ) {
    assert.equal(
      response.status,
      expectedStatusCode,
      message ||
        `Expected status code to be ${expectedStatusCode} but got ${response.status}`,
    );
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
