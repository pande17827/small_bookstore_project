// controller/book_controller.js
import Book from '../model/book_model.js';

export const getBook = async (req, res) => {
  try {
    const books = await Book.find(); // Find all books
    res.status(200).json(books);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error fetching books', error });
  }
};
