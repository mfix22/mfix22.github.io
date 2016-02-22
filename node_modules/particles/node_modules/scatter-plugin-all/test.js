var expect = require('chai').expect,
  Scatter = require('scatter');

describe('require all modules in a namespace', function() {
  it('should create a function that delegates to another object', function() {
    var objA = {
      foo: function() {
        return "a";
      }
    };
    
    var objB = {};

    objB.foo2 = delega.delegateFunction(objA, 'foo');
    
    expect(objB.foo2()).to.be.equal("a");
  });
});
