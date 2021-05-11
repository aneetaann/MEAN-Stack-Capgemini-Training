function Rectangle (width,height){
    this.width = width;
    this.height = height;
}
let r1 = new Rectangle(5,6);
console.log(r1.width,r1.height);
r1.height +=10;
console.log(r1.width,r1.height);
let r2 = new Rectangle(5,8);
console.log(r2.width,r2.height);
r2.height +=20;
console.log(r2.width,r2.height);