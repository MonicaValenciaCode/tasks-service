import { ITasksRepository } from "../../../../src/interfaces/v1/tasks.interfaces";
import TasksService from "../../../../src/services/v1/tasks.service";

describe("TasksService", () => {
  let tasksRepository: ITasksRepository;
  let tasksService: TasksService;

  beforeEach(() => {
    // Mock for the tasks repository
    tasksRepository = {
      findAll: jest.fn(),
    } as unknown as ITasksRepository;

    // Inject mocked repository into the service
    tasksService = new TasksService(tasksRepository);
  });

  it("should return all tasks when findAll is successful", async () => {
    // Mock data
    const mockTasks = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
    ];

    // Mock findAll in the repository to return the mock tasks
    (tasksRepository.findAll as jest.Mock).mockResolvedValue(mockTasks);

    const tasks = await tasksService.getAllTasks();

    expect(tasks).toEqual(mockTasks);
    expect(tasksRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it("should throw an error when findAll fails", async () => {
    // ARRANGE
    const errorMessage = "Database error";

    // Mock findAll method to throw an error
    (tasksRepository.findAll as jest.Mock).mockRejectedValue(
      new Error(errorMessage),
    );

    //ACT
    await expect(tasksService.getAllTasks()).rejects.toThrow(
      "Failed to retrieve tasks from the database.",
    );

    // ASSERT
    expect(tasksRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
