var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
   render: function () {
       return (
           <div>
               <h3>nav bar here</h3>
               <Link to="/">Recipes</Link>
               <br/>
               <Link to="about">About</Link>
               <br/>
               <Link to="instructions">Instructions</Link>
           </div>
       );
   }
});

module.exports = Nav;