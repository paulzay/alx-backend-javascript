export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }
  getName() {
    return this._name;
  }
  setName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  getCode() {
    return this._code;
  }
  setCode(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = newCode;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
