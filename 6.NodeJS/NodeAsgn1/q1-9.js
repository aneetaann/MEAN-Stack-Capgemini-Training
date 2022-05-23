var fs=require("fs");
var filetoread=process.argv[2];
console.log(filetoread);
fs.readfile(filetoread, function(err, contentfile){
    if(err)throw err;
    console.log("returning the values:");
    var acontentfile=contentfile.split("");
    console.log(acontentfile);    
});