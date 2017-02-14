const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const FlipMove = require('react-flip-move')

const PROJECTS = require('../../assets/projects')
const { chunk } = require('../helpers/util')
const PlanetCard = require('./PlanetCard')
const HorizontalIconList = require('./HorizontalIconList')
const Slider = require('./Slider')

const Posts = require('./Posts')
const Bio = require('./Bio')
const Projects = require('./Projects')

require('react-tap-event-plugin')()

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme({
    palette: {
      primary1Color: '#1C4B9C',
      accent1Color: '#1C4B9C',
    }
  })}>
    <div className="main col-md-12 col-sm-12 col-xs-12" id="main">
      <div className="row">
        <div className="col-md-3 col-xs-12">
          <Bio />
        </div>
        <div className="col-md-3 col-xs-12">
          <Posts />
        </div>
        <div className="col-md-6 col-xs-12">
          <Projects />
        </div>
      </div>
    </div>
  </MuiThemeProvider>
)

module.exports = App
