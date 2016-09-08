var React = require('react');
var Counter = require('Counter');
var MacroForm = require('MacroForm');
var DeductMacros = require('DeductMacros');

var Macrotracker = React.createClass({
  getInitialState: function(){
    return {
      p_macrocount: 0,
      c_macrocount: 0,
      f_macrocount: 0,
      p_loaded: false,
      f_loaded: false,
      c_loaded: false,
    };
  },
  handleProteinMacroAdd: function(macrograms){
    this.setState({
      p_macrocount: macrograms,
      p_loaded: true
    });
  },
  handleCarbMacroAdd: function(macrograms){
    this.setState({
      c_macrocount: macrograms,
      c_loaded: true
    });
  },
  handleFatMacroAdd: function(macrograms){
    this.setState({
      f_macrocount: macrograms,
      f_loaded: true
    });
  },
  handleProteinMacroSub: function(newMacrocount){
    this.setState({
      p_macrocount: this.state.p_macrocount - newMacrocount
    });
    if(this.state.p_macrocount <= 0){
      this.setState({p_loaded: false})
    }
  },
  handleCarbMacroSub: function(newMacrocount){
    this.setState({
      c_macrocount: this.state.c_macrocount - newMacrocount
    });
    if(this.state.c_macrocount <= 0){
      this.setState({c_loaded: false})
    }
  },
  handleFatMacroSub: function(newMacrocount){
    this.setState({
      f_macrocount: this.state.f_macrocount - newMacrocount
    });
    if(this.state.f_macrocount <= 0){
      this.setState({f_loaded: false})
    }
  },
  render: function(){
    var {p_macrocount,f_macrocount,c_macrocount, p_loaded,c_loaded,f_loaded} = this.state;
    var renderProteinArea = () => {
      if(p_loaded === false){
        return <MacroForm onMacroAdd={this.handleProteinMacroAdd}/>
      } else {
        return <DeductMacros onMacroSub={this.handleProteinMacroSub} />
      }
    }
    var renderCarbArea = () => {
      if(c_loaded === false){
        return <MacroForm onMacroAdd={this.handleCarbMacroAdd}/>
      } else {
        return <DeductMacros onMacroSub={this.handleCarbMacroSub} />
      }
    }
    var renderFatArea = () => {
      if(f_loaded === false){
        return <MacroForm onMacroAdd={this.handleProteinMacroAdd}/>
      } else {
        return <DeductMacros onMacroSub={this.handleProteinMacroSub}/>
      }
    }

    return(
      <div>
        <h1 className="page-title">Track Macros</h1>
        <div className="row">
          <div className="large-4 columns">
            <Counter macrocount={p_macrocount}/>
            {renderProteinArea()}
          </div>
          <div className="large-4 columns">
            <Counter macrocount={c_macrocount}/>
            {renderCarbArea()}
          </div>
          <div className="large-4 columns">
            <Counter macrocount={f_macrocount}/>
            {renderFatArea()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Macrotracker;
