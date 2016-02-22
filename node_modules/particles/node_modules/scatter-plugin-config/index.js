


function ConfigPlugin(configModuleName) {
  this.configModuleName = configModuleName || 'config';
}

ConfigPlugin.prototype.register = function(container) {
  this.container = container;
  container.mapLoader('config', this);
};

ConfigPlugin.prototype.loadDependency = function(dependency, fromModule) {
  return this.container.loadModule(this.configModuleName, fromModule).then(
    function(config) {
      return config.instance.get(dependency.name);
    }
  );
};


module.exports = ConfigPlugin;
