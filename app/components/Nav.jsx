var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
   render: function () {
       return (
           <div>
               <Link to="/">Recipes</Link>
               <br/>
               <Link to="about">About</Link>
               <br/>
               <Link to="instructions">Instructions</Link>
               <hr/>
           </div>
       );
   }
});

module.exports = Nav;

