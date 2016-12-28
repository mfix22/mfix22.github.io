const React = require('react')
const PROJECTS = require('../assets/projects')
const PlanetCard = require('./PlanetCard')
const HorizontalIconList = require('./HorizontalIconList')

const {
  REACT,
  SASS,
  BOOTSTRAP,
  JS,
  HTML,
  CSS,
  ATOM
} = require('../assets/company_logos');

const chunk = (a, c) => {
  return a.reduce((accum, next, i) => {
    const intI = Math.floor(i / c)
    return Object.assign([], accum, {
      [intI]: [...accum[intI], next]
    })
  }, Array(Math.ceil(a.length / c)).fill([]))
}

const projectOrder = [
  'squadbot',
  'librarify',
  'tm',
  'what3words',
  'bandwagon',
  'resource_map',
  'transcend',
  'automaton',
  // 'eventbot',
  // 'buz',
  // 'fab',
  // 'rideshare'
]

const App = () => {
  return (
    <div>
      {
        chunk(projectOrder.map(id => PROJECTS[id]), 2).map((pair, index) => {
          const [first, second] = pair
          return (
            <div key={index} className="row work_row">
              <PlanetCard
                {...first}
              />
              <PlanetCard
                {...second}
              />
            </div>
          )
        })
      }
      <div className="row text-center" id="footer">
        <p className="footer">
          <span className="octicon octicon-terminal" />
           with <i className="icon ion-coffee footer-icon"></i> and
        </p>
        <HorizontalIconList
          icons={[REACT, SASS, BOOTSTRAP, JS, HTML, CSS, ATOM]}
        />
      <p className="footer">by Michael Fix &copy; 2016</p>
      </div>
    </div>
  )
}

module.exports = App
