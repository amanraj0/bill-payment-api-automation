import { type Test, type Response } from "supertest";
import { Log } from "./index.js";
import { TestExecutionContext } from "../context/index.js";

function maskHeaders(headers: Record<string, any> = {}) {
  const masked = { ...headers };

  const sensitiveHeaders = ["x-api-key"];

  for (const key of sensitiveHeaders) {
    if (key in masked) {
      masked[key] = "*********";
    }
  }

  return masked;
}

export function logRequest(request: Test) {
  const method = (request as any).method;
  const url = (request as any).url;
  const headers = maskHeaders((request as any)._header ?? {});
  const body = (request as any)._data;

  const context = TestExecutionContext.get();

  Log.info(
    `➡️[Test : ${context?.testName ?? "N/A"}] [TraceId : ${context?.traceId ?? "N/A"}] ${method} ${url}`,
  );

  Log.debug(`
    REQUEST
    --------
    Suite : ${context?.suiteName ?? "N/A"}
    Test  : ${context?.testName ?? "N/A"}
    Method : ${method}
    URL    : ${url}

    Headers:
    ${JSON.stringify(headers, null, 2)}

    Body   :
    ${body ? JSON.stringify(body, null, 2) : "N/A"}
    `);
}

export function logResponse(response: Response) {
  const context = TestExecutionContext.get();
  Log.info(
    `⬅️[Test : ${context?.testName ?? "N/A"}] [TraceId : ${context?.traceId ?? "N/A"}] [Status : ${response.status}] ${response.req.method} ${response.req.path}`,
  );

  Log.debug(`
RESPONSE
---------
Suite : ${context?.suiteName ?? "N/A"}
Test  : ${context?.testName ?? "N/A"}
Status : ${response.status}

Headers:
${JSON.stringify(response.headers, null, 2)}

Body   :
${JSON.stringify(response.body, null, 2)}
`);
}
