/**
 * Tests the actual implementation inside the controller, no Express app involved
 * This unit test focuses ONLY on the controller function.
 * No need for server or routes.
 * We'll mock the Express Response object to verify correct behaviour.
 */

import { getTasks } from "../../../../src/controllers/v1/tasks.controller";
import { mockRequest, mockResponse } from "../../../utils/express.mocks";

describe("getTasks Controller", () => {
  it("should return status 200 and correct message", () => {
    // Arrange: mock request and response
    const req = mockRequest();
    const res = mockResponse();

    // Act: Call the controller
    getTasks(req, res);

    // Assert: Verify correct status and JSON message
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "All tasks..." });
  });
});
