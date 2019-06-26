import express from 'express'
import CategoryController from '../controller/category'
const router = express.Router()

router.post('/newCategory', CategoryController.category)
export default router