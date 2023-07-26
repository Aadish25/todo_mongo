import express from "express";
import Functions from "../controllers/controllers.js"
const router=express.Router();
router.post("/task",Functions.CreateTask);
router.get("/task",Functions.GetTasks)
router.get("/task/:_id",Functions.GetTask);
router.put("/task/:_id",Functions.EditTask);
router.delete("/task/:_id",Functions.DeleteTask);
export default router;