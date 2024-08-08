export default class Car {
  constructor(motor, brand, color) {
    this.motor = motor;
    this.brand = brand;
    this.color = color;

  }
  cloneCar() {
    return new Car(this.motor, this.brand, this.color);
  }
}
