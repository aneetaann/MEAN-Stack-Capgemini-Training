var fs=require("fs");
var namefile=process.argv[2]+".txt";
var texttowrite=process.argv[3];
fs.writefile(namefile, texttowrite, function(err){
    if(err)throw err;
    console.log("the file has been saved");
});
fs.readfile(namefile, function(err, contentfile){
    if(err)throw err;
    console.log(contentfile);
    
});