var React = require('react');
var Nav = require('Nav');


var Main = React.createClass({
   render: function () {
       return (
           <div>
               <Nav/>
               <h2>Recipes App, take a look</h2>
                    {this.props.children}
           </div>
       );
   }
});

module.exports = Main;