const express = require('express');
const app = express();
const path = require('path');

// Serve the static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root path
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
