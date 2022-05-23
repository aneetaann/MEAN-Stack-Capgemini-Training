var fs = require("fs");
var fileToread = process.argv[2];
console.log("reading the file:"+ fileToread);
var contentFile = fs.readFileSync(fileToread);{
    console.log(contentFile);
    
};

