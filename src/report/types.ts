export interface AssertionResult {
  name: string;
  expected: unknown;
  actual: unknown;
  status: "PASS" | "FAIL" | "SKIPPED";
  traceId: string;
  message?: string;
}
