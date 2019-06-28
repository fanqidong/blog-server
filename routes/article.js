import express from "express";
import ArticleController from "../controller/article";
const router = express.Router();

router.post("/newArticle", ArticleController.article);
export default router;
