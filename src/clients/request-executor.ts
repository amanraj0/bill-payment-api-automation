import { type Test, type Response } from "supertest";
import { config } from "../configs/index.js";
import { logRequest, logResponse, Log } from "../utils/index.js";

class RequestExecutor {
  static {
    Log.info(`Test Execution started on - ${config.env}`);
  }

  public static async execute(request: Test): Promise<Response> {
    try {
      logRequest(request);

      const response = await request;

      logResponse(response);

      return response;
    } catch (err) {
      Log.error("Error occured while executing", err);

      throw err;
    }
  }
}

export default RequestExecutor;
