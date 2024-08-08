export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
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
    return `${this.name} (${this.code})`;
  }
}
