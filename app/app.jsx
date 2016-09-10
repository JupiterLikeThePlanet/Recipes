var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');
var Main = require('Main');
var Recipes = require('Recipes');
var About = require('About');
var Instructions = require('Instructions');


ReactDOM.render(

    <Router history={hashHistory}>

        <Route path="/" component={Main}>
            <Route path="instructions" component={Instructions}/>
            <Route path="about" component={About}/>
            <IndexRoute component={Recipes}/>
        </Route>

    </Router>,
    document.getElementById('app')
);