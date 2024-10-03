const assert = require('assert');

const calculateNumber = require('./0-calcul').default;

describe('calculateNumber', function () {
  it('should return 2', function () {
    assert.equal(calculateNumber(1, 1), 2);
  });
});
