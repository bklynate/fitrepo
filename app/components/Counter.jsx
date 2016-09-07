var React = require('react');

var Counter = React.createClass({
  getDefaultProps: function(){
    macrocount: 0
  },
  propTypes: {
    macrocount: React.PropTypes.number
  },
  formatMacros: function(macrocount){
    if(macrocount === 0){
      macrocount
    } else if (macrocount < 100){
      macrocount = "0"+ macrocount
    }
    return macrocount
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
