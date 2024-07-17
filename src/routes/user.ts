import {Router } from 'express';
import { loginUser, newUser } from '../controllers/usercontroller';

const router = Router();
router.post('/register', newUser);
router.post('/login', loginUser)

export default router;