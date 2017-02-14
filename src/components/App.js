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
        <section>
          <div className="col-md-3 col-xs-12">
            <Posts />
          </div>
          <div className="col-md-6 col-xs-12">
            <Slider
              onChange={(value) => {
                this.setState({
                  value: value * 10
                })
              }}
              />
            <div className="row">
              <FlipMove duration={175} style={{ display: 'flex', flexFlow: 'row wrap' }}>
                {
                  projectOrder.map(id => PROJECTS[id])
                  .filter(p => Math.abs(this.state.value - p.value) <= 4.5)
                  .map((planet, index) => (
                    <div
                      key={planet.header}
                      style={{
                        flexBasis: '33%',
                      }}
                      >
                      <PlanetCard {...planet} />
                    </div>
                  ))
                }
              </FlipMove>
            </div>
          </div>
        </section>
      </MuiThemeProvider>
    )
  }
}

module.exports = App
