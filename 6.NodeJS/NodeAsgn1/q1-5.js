var fs=require("fs");
var filename="nums.txt";
var wordtofind=process.argv[2].toLowerCase();
fs.readfile(filename, function(err, contentfile){
    if(err)throw err;
    var awordstext=contentfile.toLowerCase().split("");
    var afilterwords=awordstext.filter(function(word){
        return word.includes(wordtofind);
    })
    console.log("the word"+wordtofind+"appears"+afilterwords.length+"times in the text.");
});