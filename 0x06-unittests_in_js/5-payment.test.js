var sinon = require("sinon");

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  it('should return 10', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 10);
    expect(calculateNumberStub.calledWith('SUM', 100, 10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
