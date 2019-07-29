import express from 'express';
import { actions } from '../controller/article';
const router = express.Router();

router.get('/queryArticle', actions.queryArticle);
router.post('/newArticle', actions.createArticle);
router.post('/articleDetail', actions.queryDetail);

export default router;
