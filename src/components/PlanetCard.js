const React = require('react')
const HorizontalIconList = require('./HorizontalIconList')
const PlanetCard = ({ link, img, moon, header, desc, technologies }) => (
  <div className="col-md-4 col-sm-6 col-xs-12 planet_wrapper">
    <div className="planet_container">
      <a target="_blank" href={link}>
        <img className="planet" src={'img/' + img}/>
      </a>
      {
        !!moon ? (
          <div className="earth" />
        ) :
        null
      }
      {
        !!moon ? (
          <div className="moon-orbit">
            <div className="moon" />
          </div>
        ) :
        null
      }
      <div className="planet_caption">
        <h6>{header}</h6>
        <p>{desc}</p>
        <HorizontalIconList icons={technologies} />
      </div>
    </div>
  </div>
)

module.exports = PlanetCard
