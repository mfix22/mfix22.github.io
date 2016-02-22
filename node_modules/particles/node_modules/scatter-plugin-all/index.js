
function AllPlugin() {
}

AllPlugin.prototype.register = function(container) {
  this.container = container;
  container.mapLoader('all', this);
};


AllPlugin.prototype.loadDependency = function(dependency, fromModule) {
  var modules = this.container.assemble(dependency.name);
  return this.container.load(modules);
};


module.exports = AllPlugin;
