var React = require('react');
var Counter = require('Counter');
var MacroForm = require('MacroForm');

var Macrotracker = React.createClass({
  getInitialState: function(){
    return {
      p_macrocount: 0,
      c_macrocount: 0,
      f_macrocount: 0
    };
  },
  handleProteinMacroAdd: function(macrograms){
    this.setState({
      p_macrocount: macrograms
    });
  }, 
  handleCarbMacroAdd: function(macrograms){
    this.setState({
      c_macrocount: macrograms
    });
  },  
  handleFatMacroAdd: function(macrograms){
    this.setState({
      f_macrocount: macrograms
    });
  },
  render: function(){
    var {p_macrocount,f_macrocount,c_macrocount} = this.state;
    return(
      <div>
        <h1 className="page-title">Track Macros</h1>
        <div className="row">
          <div className="large-4 columns">
            <Counter macrocount={p_macrocount}/>
            <MacroForm onMacroAdd={this.handleProteinMacroAdd}/>
          </div>
          <div className="large-4 columns">
            <Counter macrocount={c_macrocount}/>
            <MacroForm onMacroAdd={this.handleCarbMacroAdd}/>
          </div>
          <div className="large-4 columns">
            <Counter macrocount={f_macrocount}/>
            <MacroForm onMacroAdd={this.handleFatMacroAdd}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Macrotracker;
