// routes/book_routes.js
import express from 'express';
import { getBook } from '../controller/book_controller.js';

const router = express.Router();

router.get('/', getBook); // GET route to fetch all books

export default router;
