export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  getName() {
    return this._name;
  }

  setName(newName) {
    this._name = newName;
  }

  getCode() {
    return this._code;
  }

  setCode(newCode) {
    this._code = newCode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
