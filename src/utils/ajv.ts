import { Ajv } from "ajv";

const ajv = new Ajv({
  allErrors: true,
  strict: true,
  removeAdditional: false,
  useDefaults: false,
});

export { ajv };
