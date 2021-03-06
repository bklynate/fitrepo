var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Macroguide = require('Macroguide');
var Macrotracker = require('Macrotracker');
var Login = require('Login');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Macroguide}/>
      <Route path="macrotracker" component={Macrotracker}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
