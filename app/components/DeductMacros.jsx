var React = require('react');

var DeductMacros = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var macrograms = this.refs.macrograms.value;

    if(macrograms.match(/^[0-9]*$/) && macrograms !== ""){
      this.refs.macrograms.value = "";
      this.props.onMacroSub(parseInt(macrograms, 10));
    }
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onFormSubmit}>
          <input type="text" ref="macrograms" placeholder="Enter amount to deduct.."/>
          <button className="expanded button hollow alert">Deduct Macros</button>
        </form>
      </div>
    );
  }
});

module.exports = DeductMacros;
