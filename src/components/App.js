import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Posts from './Posts'
import Bio from './Bio'
import Projects from './Projects'

require('react-tap-event-plugin')()

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme({
    palette: {
      primary1Color: '#1C4B9C',
      accent1Color: '#1C4B9C',
    }
  })}>
    <div className='main col-md-12 col-sm-12 col-xs-12' id='main'>
      <div className='row'>
        <div className='col-md-3 col-xs-12'>
          <Bio />
        </div>
        <div className='col-md-3 col-xs-12'>
          <Posts />
        </div>
        <div className='col-md-6 col-xs-12'>
          <Projects />
        </div>
      </div>
    </div>
  </MuiThemeProvider>
)

module.exports = App
