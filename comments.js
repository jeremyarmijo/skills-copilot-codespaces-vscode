// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let comments = [];

// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});