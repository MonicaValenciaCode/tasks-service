import {
  ITasksService,
  ITasksRepository,
  ITask,
} from "../../interfaces/v1/tasks.interfaces";

class TasksService implements ITasksService {
  constructor(private tasksRepository: ITasksRepository) {}

  async getAllTasks(): Promise<ITask[]> {
    try {
      return await this.tasksRepository.findAll();
    } catch (error) {
      console.error("Error retrieving tasks:", error);
      throw new Error("Failed to retrieve tasks from the database.");
    }
  }
}

export default TasksService;
