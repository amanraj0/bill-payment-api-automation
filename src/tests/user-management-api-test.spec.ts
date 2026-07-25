import { UserManagementController } from "../services/index.js";
import { AssertionHelpers } from "../utils/index.js";

let userManagementController: UserManagementController;

describe("User Management API Tests", async function () {
  beforeEach(async function () {
    userManagementController = new UserManagementController();
  });

  it("should create a new user successfully @regression @smoke", async function () {
    const response = await userManagementController.createUser(
      {
        email: "aman.raj1121@example.com",
        firstName: "Aman",
        lastName: "Raj",
      },
      true,
    );

    AssertionHelpers.assertStatusCode(response, 409);
  });

  it("should get an error when email is not provided @regression", async function () {
    const response = await userManagementController.createUser(
      {
        email: "",
        firstName: "Aman",
        lastName: "Raj",
      },
      true,
    );

    AssertionHelpers.assertStatusCode(response, 400);

    const actualEmailRequiredError = response.body.error.details.filter(
      (detail: any) => detail.field === "email" && detail.code === "REQUIRED",
    );

    AssertionHelpers.assertEqual(
      actualEmailRequiredError[0].message,
      "email is required",
    );
  });
});
