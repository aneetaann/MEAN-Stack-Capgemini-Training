const compose = (f1, f2) => (value) => f1(f2(value));

const square = (x) => x * x;
const double = (x) => x * 2;

var f1 = compose(square, double);
console.log(f1(5));
console.log(f1(10));
var f2 = compose(double, square);
console.log(f2(5));
console.log(f2(10));