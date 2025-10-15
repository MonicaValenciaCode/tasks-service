import { TaskStatus } from "../../enums/task.enum";
import { Request, Response } from "express";

export interface ITask {
  task_id: number;
  task_name: string;
  frequency: string;
  category: ITaskCategory;
  start_date: Date;
  history: ITaskHistory[];
  due_date?: Date;
}

export interface ITaskCategory {
  category_name: string;
  category_id: string; // UUID
}

export interface ITaskHistory {
  date: Date;
  status: TaskStatus;
}

export interface ITasksRepository {
  findAll(): Promise<ITask[]>;
}

export interface ITasksService {
  getAllTasks(): Promise<ITask[]>;
}

export interface ITasksController {
  getTasks(req: Request, res: Response): Promise<void>;
}

export interface ITasksDependencyConfig {
  tasksRepository?: ITasksRepository;
  tasksService?: ITasksService;
  tasksController?: ITasksController;
}

export interface ITasksDependencyContainer {
  getTasksController(): ITasksController;
}
