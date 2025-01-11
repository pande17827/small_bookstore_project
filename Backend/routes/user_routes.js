import express from 'express';
import { signup, login } from '../controller/user_controller.js';

const router = express.Router();

// User routes
router.post('/signup', signup);
router.post('/login', login);

export default router;
