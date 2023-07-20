import { getSignals ,createSignal,DeleteSignal,updateSignal,SortSignal } from "../controllers/signalController.js";
import express from "express";

const router=express.Router();

router.post("/create",createSignal);
router.get("/getall",getSignals);
router.patch("/update",updateSignal);
router.delete("/delete",DeleteSignal);

router.get("/sort",SortSignal);

export default router; 