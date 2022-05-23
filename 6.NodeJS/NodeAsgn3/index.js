const express = require("express");
const bodyParser = require("body-parser");
//set up an express app
const app = express();

app.use(express.json());

//initialize routes
app.use('/inventory', require("./routes/api"));

//listen for requests
app.listen(process.env.port || 8081, function(){
    console.log("now listening for requests");
})
