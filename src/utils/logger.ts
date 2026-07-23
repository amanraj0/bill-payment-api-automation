import { createLogger, format, transports } from "winston";
import { config } from "../configs/index.js";

const logger = createLogger({
  level: config.logLevel,
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.printf(({ timestamp, level, message, stack }) => {
      return stack
        ? `[${timestamp}] ${level.toUpperCase()} : ${stack}`
        : `[${timestamp}] ${level.toUpperCase()} : ${message}`;
    }),
  ),

  transports: [
    new transports.Console(),

    new transports.File({
      filename: "logs/app.log",
    }),
  ],
});

export default logger;
