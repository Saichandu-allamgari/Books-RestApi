// require('dotenv').config();
// const mongoose = require('mongoose');
// const app = require('./app');

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("MongoDB Connected");
//         app.listen(process.env.PORT, () => {
//             console.log(`Server running on port ${process.env.PORT}`);
//         });
//     }).catch(err => {
//         console.error("MongoDB connection error:", err);
//     });


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
