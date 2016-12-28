// node modules
const React = require('react');
const { render } = require('react-dom');

const configure = require('./configure')
configure()

// local modules
const App = require('./App');

render(
  <App />,
  document.getElementById('root')
)
