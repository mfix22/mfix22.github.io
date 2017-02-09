const React = require('react')
const PROJECTS = require('../../assets/projects')
const { chunk } = require('../helpers/util')
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
} = require('../../assets/company_logos')

const projectOrder = [
  'alchemy',
  'squad',
  'squadbot',
  'librarify',
  'tm',
  'emily',
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
        chunk(projectOrder.map(id => PROJECTS[id]), 3).map((pair, index) => (
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
        ))
      }
      <div className="row text-center" id="footer">
        <p className="footer">
          <span className="octicon octicon-terminal" /> with <i className="icon ion-coffee footer-icon"></i> and
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
