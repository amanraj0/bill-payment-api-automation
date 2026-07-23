import { logger } from "./index.js";

class Log {
  static info(message: string) {
    logger.info(message);
  }

  static warn(message: string) {
    logger.warn(message);
  }

  static error(message: string, error?: unknown) {
    if (error instanceof Error) {
      logger.error(`${message}\n${error.stack}`);
    } else {
      logger.error(message);
    }
  }

  static debug(message: string) {
    logger.debug(message);
  }
}

export default Log;
