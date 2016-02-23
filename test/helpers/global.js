var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.expect = require('chai').expect;
global.sinon = sinon;
global.sandbox = sinon.sandbox.create();

afterEach(function () {
  sandbox.restore();
});
