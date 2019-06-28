import express from "express";
import CategoryController from "../controller/category";
const router = express.Router();

router.get("/queryCategory", CategoryController.actions.queryCategory);
router.post("/updateCategory", CategoryController.actions.updateCategory);
router.post("/createCategory", CategoryController.actions.createCategory);
router.post("/deleteCategory", CategoryController.actions.deleteCategory);
    
export default router;
