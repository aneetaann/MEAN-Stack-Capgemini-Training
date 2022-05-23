var sum=require("./operations/sum");
var subs=require("./operations/substraction");
var mult=require("./operations/multiplication");
var div=require("./operations/division");
var moment=require("moment");

var firstoperand= +process.argv[2]
var secondoperand= +process.argv[3]

console.log("today is:"+moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
sum(firstoperand, secondoperand);
mult(firstoperand,secondoperand);
