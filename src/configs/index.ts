import { TEST_ENV, API_KEY } from "./dotenv-config.js";
import {
  getEnvironment,
  type EnvironmentConfig,
} from "./environment-config.js";

const config: EnvironmentConfig = getEnvironment(TEST_ENV);

export { API_KEY, config };
