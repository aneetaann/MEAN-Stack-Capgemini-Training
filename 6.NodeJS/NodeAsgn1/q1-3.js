var fs=require("fs");
fs.readdir(__dirname,function(err,items){
    console.log(items);
    for(var i=0;i<items.length;i++){
        var Status = fs.statSync(__filename)
        if(Status.isFile())
        console.log(items[i]+":FILE");
    }
})