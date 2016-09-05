var React = require('react');
var Counter = require('Counter');
var MacroForm = require('MacroForm');

var Macrotracker = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="page-title">Track Macros</h1>
        <div className="row">
          <div className="large-4 columns">
            <Counter macrocount={50}/>
          </div>
          <div className="large-4 columns">
            <Counter />
          </div>
          <div className="large-4 columns">
            <Counter />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Macrotracker;
