var React = require('react');

var MacroForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var macroAmount = this.refs.macrograms.value;

    if(macroAmount.match(/^[0-9]*$/)){
      this.refs.macroAmount.value = "";
      this.props.onMacroAdd(parseInt(macroAmount, 10));
    }
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onFormSubmit}>
          <input type="text" ref="macrograms" placeholder="Input macro in grams"/>
          <button className="expanded button hollow">Set Macros</button>
        </form>
      </div>
    )
  }
});

module.exports = MacroForm;
