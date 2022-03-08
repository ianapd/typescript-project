import { Point } from './point.js';

// Variable Declarations
let a: number = 1;
let b: boolean = true;
let c: string = 'a';
let d: any = 2;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a'];

console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);
console.log("d: " + d);
console.log("e: " + e);
console.log("f: " + f);

enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;

console.log("Color: " + backgroundColor);

// Type Assertions
// let message;
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

// Arrow Functions
let doLog = (message) => console.log(message);

doLog("This is an arrow function.")

// Custom Types
// Inline Annotation
let drawSomePoint = (point: { x: number, y: number }) => {
  
}

drawSomePoint({
  x: 1,
  y: 2
})

// Use an Interface
interface MyPoint {
  x: number,
  y: number
}

let drawPoint = (point: MyPoint) => {
  // ...
}

drawPoint({
  x: 1,
  y: 2
})

let point = new Point(1, 2);
// Properties
let x = point.x;
point.x = 10;
let y = point.y;
point.y = 20;
console.log("x: " + x);
console.log("y: " + y);
point.draw();

