var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
   render: function () {
       return (
           <div>
               <nav className="navbar navbar-default">
                   <div className="container-fluid">
                       <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                           <Link to="/">Recipes </Link>
                            /
                           <Link to="about"> About </Link>
                           /
                           <Link to="instructions"> Instructions</Link>
                       </div>
                   </div>
               </nav>
           </div>
       );
   }
});

module.exports = Nav;

