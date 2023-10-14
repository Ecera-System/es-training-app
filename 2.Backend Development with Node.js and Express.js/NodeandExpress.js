// Require the necessary modules
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
