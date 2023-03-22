import express from "express";
import * as authController from '../controllers/auth'

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/all', authController.getUser);
router.put('/update-user', authController.updateUser)
router.delete('/delete-user', authController.deleteUser)
export default router;