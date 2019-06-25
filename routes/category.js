import express from 'express'
import Category from '../controller/category'
const router = express.Router()

router.post('/newCategory', Category.newCategory)
export default router