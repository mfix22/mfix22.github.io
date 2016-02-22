var expect = require('chai').expect,
  Plugin = require("../"),
  Scatter = require('scatter');

describe('all!', function() {
  var scatter;
  beforeEach(function() {
    scatter = new Scatter({
      plugins: [new Plugin()]
    });
    scatter.registerParticles([
      __dirname + "/testParticleA", 
      __dirname + "/testParticleB"
    ]);
  });
  
  it('should require all modules in global namespace', function(done) {
    scatter.load("all!").then(function(modules) {
      expect(modules).to.have.keys("mod1", "mod2", "mod3", "mod4", "sub/mod5");
      expect(modules["mod1"]).to.have.property("name", "mod1b");
      done();
    }).catch(done);
  });
  
  
  it('should require all modules in specific namespace', function(done) {
    scatter.load("all!sub").then(function(modules) {
      expect(modules).to.have.keys("sub/mod5");
      done();
    }).catch(done);
  });
});
