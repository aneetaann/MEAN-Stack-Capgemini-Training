// server.js
const express = require('express');

// Define Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Serve Static Assets
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});

app.use(express.static('public'));
//app.use(express.static('images'));
//app.use(express.static('css'));
// Virtual Path Prefix '/static'
app.use('/static', express.static('public'))