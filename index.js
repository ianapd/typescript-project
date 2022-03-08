import { Point } from './point.js';
// Variable Declarations
let a = 1;
let b = true;
let c = 'a';
let d = 2;
let e = [1, 2, 3];
let f = [1, true, 'a'];
console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);
console.log("d: " + d);
console.log("e: " + e);
console.log("f: " + f);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let backgroundColor = Color.Red;
console.log("Color: " + backgroundColor);
// Type Assertions
// let message;
let message;
message = 'abc';
let endsWithC = message.endsWith('c');
let alternativeWay = message.endsWith('c');
// Arrow Functions
let doLog = (message) => console.log(message);
doLog("This is an arrow function.");
// Custom Types
// Inline Annotation
let drawSomePoint = (point) => {
};
drawSomePoint({
    x: 1,
    y: 2
});
let drawPoint = (point) => {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
let point = new Point(1, 2);
// Properties
let x = point.x;
point.x = 10;
let y = point.y;
point.y = 20;
console.log("x: " + x);
console.log("y: " + y);
point.draw();
