import express from "express";
import * as bookController from '../controllers/book'

const router = express.Router();


router.get('/all', bookController.getBookTable);
router.get('/allorder', bookController.getAllBookTableOfUser);
router.get('/statistics', bookController.getStatistics);
router.get('/statistics_year', bookController.getStatistics_year);
// router.use(verifyToken)
router.get('/order', bookController.getBookTableOfUser);
router.post('/create-book', bookController.createBook);
router.put('/update-book', bookController.updateBook);
router.delete('/delete-book', bookController.deleteBook);

router.post('/create-bookmenu', bookController.createBookMenu);
router.get('/bookmenu', bookController.getBookMenu);
router.delete('/delete-bookmenu', bookController.deleteBookMenu);

router.get('/table', bookController.getTable);
router.post('/create-table', bookController.createTable);
router.put('/update-table', bookController.updateTable);
router.delete('/delete-table', bookController.deleteTable);

router.put('/set-table', bookController.setTable);

export default router;