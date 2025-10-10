import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

import tasksRouterV1 from "./routes/v1/tasks.routes";

app.use("/api/v1/tasks", tasksRouterV1);

app.get("/api", (req: Request, res: Response): Response => {
  return res.json({ message: "testing route" });
});

app.use((req: Request, res: Response): Response => {
  return res.status(404).json({ error: "Route not found" });
});

export default app;
