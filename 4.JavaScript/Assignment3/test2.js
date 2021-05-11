function Rectangle (width,height){
    this.width = width;
    this.height = height;
}
let r1 = new Rectangle(5,6);
console.log(r1.width,r1.height);
r1.height +=10;
console.log(r1.width,r1.height);
r1.getArea=function(){
    return r1.width*r1.height;
}
console.log(r1.getArea());