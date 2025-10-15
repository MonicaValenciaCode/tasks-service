import { ITask, ITasksRepository } from "../../interfaces/v1/tasks.interfaces";
import { mockTasksData } from "../../mockData/tasks.data.mock";

class TasksRepository implements ITasksRepository {
  async findAll(): Promise<ITask[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTasksData);
      }, 100);
    });
  }
}

export default TasksRepository;
