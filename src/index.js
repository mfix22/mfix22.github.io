// node modules
const React = require('react')
const { render } = require('react-dom')

require('./helpers/configure')()

// local modules
const App = require('./components/App')

render(
  <App />,
  document.getElementById('root')
)
