import { Request, Response } from "express";
import {
  ITasksController,
  ITasksService,
} from "../../interfaces/v1/tasks.interfaces";
class TasksController implements ITasksController {
  constructor(private tasksService: ITasksService) {}

  getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
      const tasks = await this.tasksService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      console.log("Error fetching tasks:", error);
      res
        .status(500)
        .json({
          error: "An unexpected error occurred. Please try again later.",
        });
    }
  };
}

export default TasksController;
