import { type Response } from "supertest";
import { RequestBuilder, RequestExecutor } from "../clients/index.js";
import { UserManagementControllerEndpoints } from "../endpoints/index.js";

class UserManagementController {
  public async createUser(
    payload: Record<string, any>,
    isAuthRequired: boolean,
  ): Promise<Response> {
    let headers = {};

    const builder = new RequestBuilder();

    const request = builder
      .post(UserManagementControllerEndpoints.CREATE_USER)
      .setHeaders(headers, true)
      .setJsonPayload(payload)
      .build();

    return RequestExecutor.execute(request);
  }
}

export default UserManagementController;
