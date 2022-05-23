const express = require('express');
const app = express();


// routes
app.get('/', function(req, res) {
	res.send('<h1>Hello World</h1>')
});

app.get('/time', function (req, res) {
	res.send(new Date().toISOString())
});


// server
// use an environment variable named PORT for the port number if one is provided. If one is not provided use 8080:
const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})