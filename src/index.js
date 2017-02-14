// node modules
const React = require('react')
const { render } = require('react-dom')
const Footer = require('./components/Footer')
const Posts = require('./components/Posts')

require('./helpers/configure')()

// local modules
const App = require('./components/App')

render(
  <App />,
  document.getElementById('root')
)

render(
  <Footer />,
  document.getElementById('madewith')
)

render(
  <Posts />,
  document.getElementById('posts')
)
