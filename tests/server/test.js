const assert = require('assert');
const utils = require("../../server/utils");

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Utils', function() {
  it('getFirstIntersect', function () {
    assert.equal(utils.getFirstIntersect([1,2,3,4],[3,1,5,6]), 1);
    assert.equal(utils.getFirstIntersect([1,2,3,4],[3,7,5,6]), 3);
    assert.equal(utils.getFirstIntersect([1,2,3,4],[]), null);
    assert.equal(utils.getFirstIntersect([],[]), null);
    assert.equal(utils.getFirstIntersect([],[2,4,7]), null);
  });
  it('arraysIntersect', function () {
    assert.equal(utils.arraysIntersect([2,5,7],[1,2,5]), true);
    assert.equal(utils.arraysIntersect([6,7,9],[1,2,5]), false);
  });
  it('makeUrl', function () {
    assert.equal(utils.makeUrl("www.google.com", {q:"test", time:"3"}), "www.google.com?q=test&time=3");
    assert.equal(utils.makeUrl("www.google.com", {q:"test", time:null, bleb:3}), "www.google.com?q=test&bleb=3");
    assert.equal(utils.makeUrl("", {q:"test", time:"3"}), "?q=test&time=3");
    assert.equal(utils.makeUrl("www.google.com"), "www.google.com");
  });
});