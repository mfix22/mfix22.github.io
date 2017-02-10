const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const PROJECTS = require('../../assets/projects')
const { chunk } = require('../helpers/util')
const PlanetCard = require('./PlanetCard')
const HorizontalIconList = require('./HorizontalIconList')
const Slider = require('./Slider')

require('react-tap-event-plugin')()

const projectOrder = [
  'alchemy',
  'squad',
  'squadbot',
  'librarify',
  'tm',
  'emily',
  'what3words',
  'bandwagon',
  'transcend',
  'nature',
  'resource_map',
  'automaton',
  // 'eventbot',
  // 'buz',
  // 'fab',
  // 'rideshare'
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 5
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({
        palette: {
          primary1Color: '#1C4B9C',
          accent1Color: '#1C4B9C',
        }
      })}>
        <div>
          <Slider
            onChange={(value) => {
              this.setState({
                value: value * 10
              })
            }}
          />
          {
            chunk(projectOrder.map(id => PROJECTS[id])
                              .filter(p => Math.abs(this.state.value - p.value) <= 4.5), 3)
              .map((pair, index) => (
                <div key={index} className="row work_row">
                  {
                    pair.map((planet, i) =>
                      <PlanetCard
                        key={i}
                        {...planet}
                      />
                    )
                  }
                </div>
              )
            )
          }
        </div>
      </MuiThemeProvider>
    )
  }
}

module.exports = App
