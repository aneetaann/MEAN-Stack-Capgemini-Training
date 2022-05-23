var fs=require("fs");
var namefile=process.argv[2]+".txt";
var texttowrite=process.argv[3];
fs.writeFile(namefile,texttowrite,function(err){
    if(err)throw err;
    console.log("the file was saved");
    
});
fs.readFile(namefile,function(err, contentfile){
    if(err)throw err;
    console.log(contentfile);
    
});