

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/books', bookRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

module.exports = app; // Important for testing!
