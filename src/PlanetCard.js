var React = require('react');
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
            <ul>
              {this.props.technologies.map(function(listValue){
                return <li className='planet_caption_list_item'><span title={listValue.aria}><i className={listValue.type}></i></span></li>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PlanetCard;
