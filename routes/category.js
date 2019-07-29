import express from 'express';
import { actions } from '../controller/category';
const router = express.Router();

router.get('/queryCategory', actions.queryCategory);
router.post('/updateCategory', actions.updateCategory);
router.post('/createCategory', actions.createCategory);
router.post('/deleteCategory', actions.deleteCategory);

export default router;
