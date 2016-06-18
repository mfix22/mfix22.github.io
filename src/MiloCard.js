var React = require('react');
var MiloCard = React.createClass({
  render: function() {
    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
          <div>
              <div className="grid">
                  <figure className="effect-milo">
                      <img className="card" src={'img/' + this.props.img}/>
                      <figcaption>
                          <h2>{this.props.header}</h2>
                          <p>{this.props.desc}</p>
                          <a target="_blank" href={this.props.link}></a>
                      </figcaption>
                  </figure>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = MiloCard;
