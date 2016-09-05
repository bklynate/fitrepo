var React = require('react');
var {IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Macro Tracker
            </li>
            <li className="menu-text">
              <IndexLink to='/' activeClassName="active-link">Macro Guide</IndexLink>
            </li>
            <li className="menu-text">
              <IndexLink to='/macrotracker' activeClassName="active-link">Macro Tracker</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by<a href="http://natequash.herokuapp.com/" target="_blank"> Nathaniel Quashie</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
