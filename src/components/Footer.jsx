const React = require('react')
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

const Footer = () => (
  <div className="row text-center" id="footer">
    <p className="footer">
      <span className="octicon octicon-terminal" /> with <i className="icon ion-coffee footer-icon"></i> and
    </p>
    <HorizontalIconList
      icons={[REACT, SASS, BOOTSTRAP, JS, HTML, CSS, ATOM]}
    />
  <p className="footer">by michael fix &copy; 2017</p>
  </div>
)
module.exports = Footer
