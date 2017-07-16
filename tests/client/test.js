const clientMain = require("../../src/main");
const assert = require('assert');

describe('clientMain', function() {
  it('getGreeting', function () {
    assert.equal(clientMain.getGreeting(), "hello");	
  });
});