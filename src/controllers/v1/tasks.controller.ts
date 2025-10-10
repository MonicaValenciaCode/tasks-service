import { Request, Response } from "express";

export const getTasks = (req: Request, res: Response): Response => {
  return res.status(200).json({ message: "All tasks..." });
};
