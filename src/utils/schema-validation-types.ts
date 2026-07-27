import type { SchemaObject, ErrorObject } from "ajv";

export interface SchemaValidationOptions {
  payload: unknown;
  schema: SchemaObject;
}

export interface SchemaValidationResult {
  valid: boolean;
  errors: ErrorObject[] | null;
}
