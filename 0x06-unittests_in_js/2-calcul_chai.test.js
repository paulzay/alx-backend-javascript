const chai = require('chai');
const calculateNumber = require('./1-calculateNumber');

const { expect } = chai;

describe('calculateNumber', function () {
  it('should return 4', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return 5', function () {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should return 5', function () {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('should return 6', function () {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should return -2', function () {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('should return 0', function () {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('should return Error', function () {
    expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
  });
});
