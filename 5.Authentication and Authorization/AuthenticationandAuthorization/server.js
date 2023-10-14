const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Simulated User Database
const users = [
    { username: 'user1', password: 'password1', role: 'user' },
    { username: 'admin', password: 'admin123', role: 'admin' }
];

// Middleware
app.use(bodyParser.json());

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // If the user is found, return a token as a mock authentication
        res.json({ message: 'Login successful', token: 'mock-token' });
    } else {
        // If the user is not found, return an error message
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Protected route
app.get('/protected', (req, res) => {
    // Simulated authentication check
    const token = req.headers.authorization;
    if (token === 'mock-token') {
        res.json({ message: 'You have access to the protected resource.' });
    } else {
        res.status(401).json({ message: 'Unauthorized access' });
    }
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
