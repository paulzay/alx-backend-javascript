export default class Car {
  constructor(motor, brand, color) {
    this.motor = motor;
    this.brand = brand;
    this.color = color;

  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  cloneCar() {
    return new Car(this.motor, this.brand, this.color);
  }
}
