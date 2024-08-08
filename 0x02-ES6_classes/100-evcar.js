import Car from './10-car';

export default class EvCar extends Car {
  constructor(motor, brand, color, range) {
    super(motor, brand, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    return new EvCar(this.motor, this.brand, this.color, this.range);
  }
}
