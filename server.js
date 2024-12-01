const express = require('express');
const app = express();
const port = 3000; // or any port of your choice

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Example POST route
app.post('/data', (req, res) => {
    const data = req.body;
    res.send(`You sent: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
