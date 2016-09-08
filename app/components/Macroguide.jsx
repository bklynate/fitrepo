var React = require('react');

var Macroguide = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <h1 className="page-title">Nutrition Notes</h1>
          <p>The changes you'll see in the mirror will be slower than if we went for a straight cut, so we'll need to track both strength increases and body measurements carefully.
We'll aim for an average, fat loss rate of 1.25-1.5lbs a week. The scale weight may reflect a little less as muscle is put on but the measurements on the stomach will tell us that we are heading in the right direction.
          </p>
          <h2 className="page-title">Contents</h2>
          <ol>
            <li>Macros</li>
            <li>Simplified Rules and Important Nutrition Points</li>
            <li>Simplified Rules Summary</li>
            <li>Meal/Macro Timing and Example Meals</li>
            <li>Specialist Macro FAQ</li>
          </ol>
          <h2 className="page-title">Your Macros</h2>
          <p>
            We are going to cycle macros. This is the start point for you.
          </p>
          <p>
            Protein (P), Carbs (C), Fat (F). Numbers in grams.<br/>
          </p>
          <p>
            Training Day Food - 3 days a week. High Carb, LOW fat.
          </p>
            <ul>
              <li>P: 160</li>
              <li>C: 155</li>
              <li>F: 55</li>
            </ul>
          <p>
            Non-Training Day Food - 4 Days a Week. Low Carb, HighER fat.
          <ul>
            <li>P: 160</li>
            <li>C: 25</li>
            <li>F: 80</li>
          </ul>
          </p>
          <h2 className="page-title">Rules and Important Nutrition Points.</h2>
          <ul>
            <li>Only count starchy carbs. (Bread, Rice, Pasta, Potato, Fruit etc.)</li>
            <li>Vegetables -don't count against your carb number*.</li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Macroguide;
