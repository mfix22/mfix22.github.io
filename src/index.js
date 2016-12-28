// node modules
const React = require('react')
const { render } = require('react-dom')

const configure = require('./helpers/configure')
configure()

// local modules
const App = require('./components/App')

render(
  <App />,
  document.getElementById('root')
)
