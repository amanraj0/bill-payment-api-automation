import { UserManagementController } from "../services/index.js";

let userManagementController: UserManagementController;

describe("User Management API Tests", async function () {
  beforeEach(async function () {
    userManagementController = new UserManagementController();
  });

  it("@regression @smoke should create a new user successfully", async function () {
    const response = await userManagementController.createUser(
      {
        email: "aman.raj1@example.com",
        firstName: "Aman",
        lastName: "Raj",
      },
      true,
    );

    console.log("Response Status Code: ", response.status);
  });
});
