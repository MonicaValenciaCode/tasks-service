import express from "express";
import { getTasks } from "../../controllers/v1/tasks.controller";

const router = express.Router();

router.get("/", getTasks);

export default router;
