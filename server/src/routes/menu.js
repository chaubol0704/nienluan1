import express from 'express';
import * as menuController from '../controllers/menu'

const router =express.Router();
router.get('/all', menuController.getMenu)
router.get('/limit', menuController.getMenuLimit)

export default router;