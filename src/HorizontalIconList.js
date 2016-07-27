var React = require('react');
var HorizontalIconList = React.createClass({
  render: function() {
    return (
      <ul className='no-padding-no-margin'>
        {this.props.icons.map(function(listValue){
          if (listValue.url) {
            return <li className='horizontal_list_item'>
                     <a target='_blank' className="brand-icon-link" href={listValue.url}>
                       <span title={listValue.aria}><i className={listValue.type}></i></span>
                     </a>
                   </li>
          } return <li className='horizontal_list_item'><span title={listValue.aria}><i className={listValue.type}></i></span></li>
        })}
      </ul>
    );
  }
});

module.exports = HorizontalIconList;
