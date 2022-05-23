var http = require("http");
var server = http.createServer();
var PORT = process.env.PORT || 3000;
server.on("request",function(req, res){
    res.end("success I am listening from port:"+PORT);
});
server.listen(3000, function(){
    console.log("Listening on PORT:"+PORT);
});