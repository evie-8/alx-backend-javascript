import Car from './10-car';

export default class EVCar {
  constructor(brand, motor, color, range) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const br = this._brand;
    this._brand = br;
    return new Car();
  }
}
