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
  componentWillUpdate: function(nextProps,nextState){
    if(nextState.p_macrocount < 0){
      this.setState({
        p_macrocount: 0,
        p_loaded: false
      });
    }
    if(nextState.c_macrocount < 0){
      this.setState({
        c_macrocount: 0,
        c_loaded: false
      });
    }
    if(nextState.f_macrocount < 0){
      this.setState({
        f_macrocount: 0,
        f_loaded: false
      });
    }
  },
  handleProteinMacroAdd: function(macrograms){
    this.setState({
      p_macrocount: macrograms,
      p_loaded: true
    }, function(){
      this.setState({p_macrocount: this.state.p_macrocount});
    });
  },
  handleCarbMacroAdd: function(macrograms){
    this.setState({
      c_macrocount: macrograms,
      c_loaded: true
    }, function(){
      this.setState({c_macrocount: this.state.c_macrocount});
    });
  },
  handleFatMacroAdd: function(macrograms){
    this.setState({
      f_macrocount: macrograms,
      f_loaded: true
    }, function(){
      this.setState({f_macrocount: this.state.f_macrocount});
    });
  },
  handleProteinMacroSub: function(newMacrocount){
    var currentMacro = this.state.p_macrocount - newMacrocount;
    this.setState({
      p_macrocount: currentMacro
    });
    if(currentMacro === 0){
      this.setState({p_loaded: false,p_macrocount:0})
    }
  },
  handleCarbMacroSub: function(newMacrocount){
    var currentMacro = this.state.c_macrocount - newMacrocount;
    this.setState({
      c_macrocount: currentMacro
    });
    if(currentMacro === 0){
      this.setState({c_loaded: false,c_macrocount:0})
    }
  },
  handleFatMacroSub: function(newMacrocount){
    var currentMacro = this.state.f_macrocount - newMacrocount;
      this.setState({
      f_macrocount: currentMacro
    });
    if(currentMacro === 0){
      this.setState({f_loaded: false,f_macrocount:0})
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
        return <MacroForm onMacroAdd={this.handleFatMacroAdd}/>
      } else {
        return <DeductMacros onMacroSub={this.handleFatMacroSub}/>
      }
    }

    return(
      <div>
        <h1 className="page-title">Track Macros</h1>
        <div className="row">
          <div className="large-4 columns">
            <h3 className="macro-title">Protein</h3>
            <Counter macrocount={p_macrocount}/>
            {renderProteinArea()}
          </div>
          <div className="large-4 columns">
            <h3 className="macro-title">Carbs</h3>
            <Counter macrocount={c_macrocount}/>
            {renderCarbArea()}
          </div>
          <div className="large-4 columns">
            <h3 className="macro-title">Fat</h3>
            <Counter macrocount={f_macrocount}/>
            {renderFatArea()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Macrotracker;
