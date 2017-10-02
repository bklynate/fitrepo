var React = require('react');

var Macroguide = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="medium-6 large-4 small-centered columns">
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
            <li><strong>Only count starchy carbs. (Bread, Rice, Pasta, Potato, Fruit etc.)</strong></li>
            <li><strong>Vegetables -don't count against your carb number*.</strong></li>
            <ul>
              <li>Eat with every meal to slow digestion, fill the stomach and for the micronutrients.</li>
              <li>Unless you are eating an extraordinary amount*, don't count the carbs in leafy green vegetables. (*You would have to make an active effort to try and screw up your diet to reach an "extraordinary amount".)</li>
              <li>Of course, don't make the mistake of salad dressings and mayonnaise.</li>
              <li>*Exceptions: Carrots, Peas and Corn, Potatoes, Parsnips (as they are starchy vegetables). Look them up here.</li>
              <li>Vegetables are not optional. They are required.</li>
              <li><em>What is simple and painless to prepare and eat? Here's my personal list: <ul><li>Cucumbers, broccoli, peppers, spinach, cabbage. Feel free to choose your own. If you stick to the same ones you'll get quick at preparing them.</li></ul></em></li>
            </ul>
          </ul>
          <ul>
          <li><strong>Fruit -count.</strong></li>
            <ul>
              <li>Consider one 'medium' sized piece of fruit (apple, banana, pear, orange etc.) to be 25g of carbs.</li>
              <li>A notable exception to the 25g rule are grapes and raisins which will need to be checked. Berries are fine too but they will need to be checked also. Here's a good nutritional table for fruit.</li>
              <li>If you have a favourite fruit, it's worth looking that up and making a simplified rule for it on your own.</li>
              <li>Eat two pieces of fruit on training days, one piece of fruit on rest days.</li>
              <li>I do not insist on fruit but it is very good idea to include this in your diet.</li>
              <li>Dried fruit: The bulk and the fibre is gone. Canned stuff often contains lots of added sugar. Highly calorie dense foods like this are not a good idea on a diet. Avoid them.</li>
              <li>Fruit Juice: Avoid for similar reasons to the above. (Lyle McDonald's recommendation.) Eat whole fruit.</li>
            </ul>
          </ul>
          <ul>
            <li><strong>Starchy Carbs -count.</strong></li>
            <ul>
              <li>Vegetables and fruits should be prioritized. Starchy carbs are the last thing to be added in.</li>
              <li>Generally speaking the less refined the better. This is especially true for a minority of people that do not do well on grains. Simply put, this means things that your great-grandmother would recognize as food.</li>
              <li><em>Potatoes/Fruit/Bread/Rice/Pasta > Cereal > Sugary Cereal.</em></li>
              <li>Raw Potatoes <em>100g = ~15g carbs. (Sometimes closer to 20g)</em></li>
              <li>Dried Rice <em>100g = ~70g of carbs. Or 140g= ~100g. (Works for most dried pasta too.)</em></li>
              <li>I think the easiest thing to do is to fill a rice cooker with the remainder of the carb requirements for your day once you have subtracted the fruit number. This means you only have to weigh the pre-cooked once at the start of the day, and the cooked rice can easily be divided into 1/2, 1/3 etc by sight in the cooker so that we don't need to weigh it again.</li>
              <li>If you are eating two pieces of fruit a day this leaves you with a carb number of 145g which is ~210g of rice and is used in the meal examples below.</li>
              <li>If something is in a packet with the nutritional information label on it, check the macros. Microwavable rice and such things often don't conform to the above simplifications.</li>
            </ul>
          </ul>
          <ul>
            <li><strong>Protein</strong></li>
              <ul>
                <li>Training Day is low-fat (Leaner cuts of meat). Rest-Day is higher fat (Fattier fish, meat etc.) Counting the fat numbers in meat can be a headache so we won't. We're just going to think of something as either 1) fatty or 2) lean.</li>
                <li>Lean Protein Sources:</li>
                <ul>
                  <li>Chicken breast (skinless)</li>
                  <li>Extremely lean red meat >95% fat-free.</li>
                  <li>Low-fat fish. Generally white fish. Some cuts of Tuna are fine. Crab too.</li>
                  <li>Egg whites. (Adding one yolk for flavour is fine.)</li>
                  <li>Protein shakes</li>
                  <li>Low-fat dairy.</li>
                </ul>
                <li>Uncooked beef/ chicken/ pork/ lamb/ fish 100g = ~20g of protein. - Keep it simple.</li>
                <li>One large egg = ~8g protein 5g fat. Egg whites = ~4g protein.</li>
                <li>We can't eat all your meat from fattier sources on rest days as this will have too much fat in total. (Besides being expensive as hell.)
                <br/>A good rule of thumb is to keep the meat on this day half lean/half fattier source. I have explained this in further detail in the section "fat".</li>
              </ul>
            </ul>
            <ul>
              <li><strong>Fat</strong></li>
              <ul>
                <li>Counting fat in meat, unless you're eating processed stuff with a nutritional label, (sausages, mince/ground meat etc) is always going to be a guess at best. Trying to find the right macros for the cut of meat that you have chosen in a nutritional calculator is a hassle. To minimize hassle on a daily continual basis I have guidelines for the counting of fat.</li>
                <li>I used to get people to assume that they would hit their fat macros by not counting the fat in meat and thinking it would all sort itself out on average. This worked 90% of the time. I'm not happy with that 10% figure left though, so the advice is to count your fat macros in everything a few times and see what numbers you get. If you come up short then add in fats from butter, olive oil, avocado, anything you wish to meet those numbers.</li>
                <li>If you then keep your meals reasonably consistent then there is no need to count everything each day. Everything will "even itself out".</li>
                <li>On training days, eat from the list of lean protein sources.</li>
                <li>On rest days, I suggest that you use a general rule to eat half of your protein macros for the day from "fattier sources" and the rest from lean sources.</li>
                <li>Important: Cuts of "fatty meat" like steak etc can vary in their fat content greatly from country to country thus I don't/can't have specific guidelines for individual cuts/meats. I do not want you to under-eat on fat as this can cause hormonal issues.</li>
                <li>Rules to try and help:</li>
                <ul>
                  <li>Up to 5g of fish oil fats are not counted in the number for fats I have given you as a target above. Count any fish oil fats over 5g against your target.</li>
                  <li>A teaspoon of olive oil is around 5g of of fat. A tablespoon is around 15g of fat so be careful with that oil and drain fat from the pan.</li>
                  <li>Nutritional Calculator* where you can search your meats. (*Links in Section 2 don't work, but 1 and 3 are fine.)</li>
                  <li>On occasion you're going to want to break away from the plan and eat something different for example a cake that has more fat. In this situation either: 1. Reduce fattier meat and guess. 2. Count everything accurately and make it fit. I personally always opt for number 1.</li>
                </ul>
              </ul>
            </ul>
        </div>
      </div>
    )
  }
})

module.exports = Macroguide;
