const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');  // Ensure this file exists in the routes folder

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
})); // Enable CORS
app.use(express.json());  // Parse incoming JSON requests

// API Routes
app.use('/api', userRoutes);

// Set the port
const PORT = process.env.PORT || 8001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
