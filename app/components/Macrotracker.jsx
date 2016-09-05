var React = require('react');
var Counter = require('Counter');

var Macrotracker = React.createClass({
  render: function(){
    return(
      <div>
        <Counter />
      </div>
    );
  }
});

module.exports = Macrotracker;
