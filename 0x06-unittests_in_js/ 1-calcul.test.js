const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should return 4', function () {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return 5', function () {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('should return 5', function () {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('should return 6', function () {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should return 2', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('should return 1', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.2), -2);
  });
  it('should return 0', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('should return 0.2', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.2);
  });
  it('should return 0.2', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.2), 0.2);
  });
  it('should return 0.2', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.2);
  });
  it('should return 0.5', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.2), 0.5);
  });
  it('should return Error', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 0), 'Error');
  });
});
