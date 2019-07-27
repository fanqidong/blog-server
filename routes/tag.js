import express from "express";
import actions from "../controller/Tag";
const router = express.Router();

router.get("/queryTag", actions.queryTag);
router.post("/updateTag", actions.updateTag);
router.post("/createTag", actions.createTag);
router.post("/deleteTag", actions.deleteTag);

export default router;