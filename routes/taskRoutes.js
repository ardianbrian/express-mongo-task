import express from "express";
import auth from "../middleware/auth.js";
import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();
router.post("/", auth, createTask);
router.get("/", auth, getTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

export default router;
