import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from './routes/book_routes.js';
import userRoutes from './routes/user_routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// MongoDB URI
const mongoURI = 'mongodb://127.0.0.1:27017/BookStore';

// Mongoose connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Set timeout to 5 seconds
}).then(() => {
  console.log('Connected successfully to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB:', error.message);
  process.exit(1); // Exit the process if connection fails
});

// Routes
app.use('/book', bookRoute);
app.use('/user', userRoutes);

// Start server
app.listen(4001, () => {
  console.log('Server is running on port 4001');
});

// Handle cleanup on app exit
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
