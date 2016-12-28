var React = require('react')
var PROJECTS = require('../assets/projects')
var PlanetCard = require('./PlanetCard')

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

const Projects = () => {
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
    </div>
  )
}

module.exports = Projects
