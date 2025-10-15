import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { ITasksDependencyContainer } from "./interfaces/v1/tasks.interfaces";
import DependenciesContainer from "./config/v1/dependenciesContainer";
import createTasksRoutes from "./routes/v1/tasks.routes";

dotenv.config();
const app = express();

//dependencies
const tasksDependencyContainer: ITasksDependencyContainer =
  new DependenciesContainer();

//routes
const tasksRoutes = createTasksRoutes(
  tasksDependencyContainer.getTasksController(),
);
app.use("/api/v1/tasks", tasksRoutes);

app.get("/api", (req: Request, res: Response): Response => {
  return res.json({ message: "Tasks service API" });
});

app.use((req: Request, res: Response): Response => {
  return res.status(404).json({ error: "not found" });
});

export default app;
