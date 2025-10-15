/**
 * Tests the actual implementation inside the controller, no Express app involved
 * This unit test focuses ONLY on the controller function.
 * No need for server or routes. Mock direct dependencies (tasksService)
 */
import DependenciesContainer from "../../../../src/config/v1/dependenciesContainer";
import { ITasksService } from "../../../../src/interfaces/v1/tasks.interfaces";
import { Request, Response } from "express";

describe("TasksController", () => {
  const createMockReqRes = () => {
    const req = {} as Partial<Request>;
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as Partial<Response>;
    return { req, res };
  };

  it("should get all tasks", async () => {
    // ARRANGE
    const mockTasks = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
    ];

    //mock the service
    const mockService: ITasksService = {
      getAllTasks: jest.fn().mockResolvedValue(mockTasks),
    };

    //inject service mock in the container
    const container = new DependenciesContainer({
      tasksService: mockService,
    });

    //get the controller
    const controller = container.getTasksController();

    //mock req and res
    const { req, res } = createMockReqRes();

    // ACT
    await controller.getTasks(req, res);

    // ASSERT
    expect(mockService.getAllTasks).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTasks);
  });

  it("should handle errors", async () => {
    // ARRANGE
    const mockService: ITasksService = {
      getAllTasks: jest.fn().mockRejectedValue(new Error("Mocked Error")),
    };

    const container = new DependenciesContainer({
      tasksService: mockService,
    });

    const controller = container.getTasksController();

    const { req, res } = createMockReqRes();

    // ACT
    await controller.getTasks(req, res);

    // ASSERT
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: "An unexpected error occurred. Please try again later.",
    });
  });
});
