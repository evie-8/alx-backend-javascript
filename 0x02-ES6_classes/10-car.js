export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return this[Symbol.species];
  }

  get [Symbol.species]() {
    return new this.constructor();
  }
}
