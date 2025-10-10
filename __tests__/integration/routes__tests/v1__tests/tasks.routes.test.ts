/**
 * Integration tests for the tasks resource, specifically for API version 1.
 * This file verifies that all task-related endpoints are working correctly.
 */

import { get } from "../../../utils/requestHelper";

describe("Integration Tests - /v1/tasks Resource", () => {
  it("should return all tasks from /api/v1/tasks", async () => {
    const res = await get("/api/v1/tasks");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "All tasks..." });
  });
});
