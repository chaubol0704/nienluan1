import express from "express";
import * as bookController from '../controllers/book'

const router = express.Router();


router.get('/all', bookController.getBookTable);

// router.use(verifyToken)
router.get('/order', bookController.getBookTableOfUser);
router.post('/create-book', bookController.createBook);
router.delete('/delete-book', bookController.deleteBook);

export default router;