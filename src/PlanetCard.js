var React = require('react');
var HorizontalIconList = require('./HorizontalIconList');
var PlanetCard = React.createClass({
  render: function() {
    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="planet_container">
          <a target="_blank" href={this.props.link}>
            <img className="planet" src={'img/' + this.props.img}/>
          </a>
          <div className="planet_caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.desc}</p>
            <HorizontalIconList icons={this.props.technologies}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PlanetCard;
