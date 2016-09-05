var React = require('react');

var Counter = React.createClass({
  getDefaultProps: function(){
    return {
      macrocount: 0
    }
  },
  formatMacros: function(macrocount){
    if(macrocount.length < 3){
      return macrocount = "0" + macrocount;
    } else {
      return macrocount = macrocount
    }

  },
  render: function(){
    var {macrocount} = this.props
    return(
      <div className="counter">
        <span className="counter-text">
          {this.formatMacros(macrocount)}
        </span>
      </div>
    );
  }
});

module.exports = Counter;
