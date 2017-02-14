const React = require('react')
const FlipMove = require('react-flip-move')

const PROJECTS = require('../../assets/projects')
const { chunk } = require('../helpers/util')
const PlanetCard = require('./PlanetCard')
const HorizontalIconList = require('./HorizontalIconList')
const Slider = require('./Slider')

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

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 5
    }
  }

  render() {
    return (
      <div>
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
    )
  }
}

module.exports = Projects
