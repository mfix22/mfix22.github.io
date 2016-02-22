[![NPM version](https://badge.fury.io/js/scatter-plugin-all.png)](http://badge.fury.io/js/scatter-plugin-all)
[![Dependency Status](https://gemnasium.com/mariocasciaro/scatter-plugin-config.png)](https://gemnasium.com/mariocasciaro/scatter-plugin-config)
[![Dependency Status](https://gemnasium.com/mariocasciaro/scatter-plugin-all.png)](https://gemnasium.com/mariocasciaro/scatter-plugin-all)

# Synopsis

Plugin for the [Scatter](https://github.com/mariocasciaro/scatter) IoC container for 
injecting all the modules in a specified namespace.

## Usage

#### Setup Scatter to use the plugin
```javascript
var Scatter = require('scatter'),
  ScatterPluginAll = require('scatter-plugin-all');


var scatter = new Scatter({
  plugins: [new ScatterPluginAll()]
});

```

#### Inject all the modules of a namespace

```javascript

module.export = function(modules) {
  return {
    foo: function() {
      console.log(modules.moduleA);
      console.log(modules.moduleB);
      //etc...
    }
  };
};

module.export.__module = {
  args: ["all!this/is/a/namespace"]
};

```

# Stability

#### 2 - Unstable

The API is in the process of settling, but has not yet had
sufficient real-world testing to be considered stable.

---
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mariocasciaro/scatter-plugin-all/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
