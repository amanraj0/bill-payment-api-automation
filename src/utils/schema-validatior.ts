import {
  ajv,
  type SchemaValidationOptions,
  type SchemaValidationResult,
} from "./index.js";
import type { ValidateFunction } from "ajv";

export class SchemaValidatior {
  private static readonly validatorCache = new WeakMap<
    object,
    ValidateFunction
  >();

  static validate(options: SchemaValidationOptions): SchemaValidationResult {
    let validator = this.validatorCache.get(options.schema);

    if (!validator) {
      validator = ajv.compile(options.schema);
      this.validatorCache.set(options.schema, validator);
    }

    const valid = validator(options.payload);

    return {
      valid: Boolean(valid),
      errors: validator.errors ?? null,
    };
  }
}
