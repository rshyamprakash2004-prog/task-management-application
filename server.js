const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Connected! ✅'))
    .catch(err => console.error('MongoDB connection error: ❌', err));

// Route Definition (ONLY Task routes)
const taskRoutes = require('./routes/task');
app.use('/api/tasks', taskRoutes);

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});