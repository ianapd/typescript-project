// Modules
// Class
export class Point {
  // Access Modifiers: public, private, protected
  // private x: number;
  // private y: number;

  // Constructor
  constructor(private _x?: number, private _y?: number) {
  }
  
  draw() {
    console.log("draw function");
    console.log("x: " + this._x);
    console.log("y: " + this._y);
  }

  // Properties
  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) 
      throw new Error('value cannot be less than 0.');

    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    if (value < 0) 
      throw new Error('value cannot be less than 0.');

    this._y = value;
  }
}

