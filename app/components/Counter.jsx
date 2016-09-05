var React = require('react');

var Counter = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="columns large-4">
          <div className="counter">
            <span className="counter-text">

            </span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Counter;
