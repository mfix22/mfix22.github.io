[![NPM version](https://badge.fury.io/js/scatter-plugin-config.png)](http://badge.fury.io/js/scatter-plugin-config)
[![Dependency Status](https://gemnasium.com/mariocasciaro/minimodel.png)](https://gemnasium.com/mariocasciaro/minimodel)

# Synopsis

Allows the [Scatter](https://github.com/mariocasciaro/scatter) IoC container to inject 
configuration parameters. Internally it loads the `config` module (by default) and invokes a 
`get` using the given config parameter.

## Usage

#### Setup Scatter to use the plugin
```javascript
var Scatter = require('scatter'),
  ScatterPluginConfig = require('scatter-plugin-config');


var scatter = new Scatter({
  plugins: [new ScatterPluginConfig()]
});

```

#### Config parameter as dependency

```javascript

module.export = function(username) {
  return {
    connect: function() {
      //do something with username
    }
  };
};

module.export.__module = {
  //inject a config parameter as dependency
  args: ["config!db.username"]
};

```

# Stability

#### 2 - Unstable

The API is in the process of settling, but has not yet had
sufficient real-world testing to be considered stable.

---
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mariocasciaro/scatter-plugin-config/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
