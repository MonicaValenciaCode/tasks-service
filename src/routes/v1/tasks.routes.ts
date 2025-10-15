import express, { Router } from "express";
import { ITasksController } from "../../interfaces/v1/tasks.interfaces";

const createTasksRoutes = (controller: ITasksController): Router => {
  const router = express.Router();

  router.get("/", controller.getTasks);

  return router;
};

export default createTasksRoutes;
