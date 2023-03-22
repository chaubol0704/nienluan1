import express from 'express';
import * as menuController from '../controllers/menu'

const router =express.Router();
router.get('/all', menuController.getMenu)
router.get('/limit', menuController.getMenuLimit)
router.post('/create-menu', menuController.createMenu)
router.put('/update-menu', menuController.updateMenu)
router.delete('/delete-menu', menuController.deleteMenu)

export default router;