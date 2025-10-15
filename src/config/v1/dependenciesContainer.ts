import TasksController from "../../controllers/v1/tasks.controller";
import TasksRepository from "../../repositories/v1/tasks.repository";
import TasksService from "../../services/v1/tasks.service";
import {
  ITasksDependencyContainer,
  ITasksRepository,
  ITasksService,
  ITasksController,
  ITasksDependencyConfig,
} from "../../interfaces/v1/tasks.interfaces";

class DependenciesContainer implements ITasksDependencyContainer {
  private _tasksRepository!: ITasksRepository;
  private _tasksService!: ITasksService;
  private _tasksController!: ITasksController;

  constructor(config?: ITasksDependencyConfig) {
    this.initializeTasksDependencies(config);
  }

  /**
   * This sets up tasks repository, service, and controller.
   * If a configuration object is provided, it will
   * use the specified instances in the object;
   * otherwise, it will create new default instances.
   * @param config - An optional configuration object that can specify custom
   * instances of the tasks repository, service, and controller.
   */
  private initializeTasksDependencies(config?: ITasksDependencyConfig): void {
    this._tasksRepository = config?.tasksRepository || new TasksRepository();
    this._tasksService =
      config?.tasksService || new TasksService(this._tasksRepository);
    this._tasksController =
      config?.tasksController || new TasksController(this._tasksService);
  }

  getTasksController(): ITasksController {
    return this._tasksController;
  }
}

export default DependenciesContainer;
