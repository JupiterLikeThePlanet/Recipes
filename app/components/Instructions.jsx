var React = require('react');



var Instructions = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Instructions</h2>
                <ul>
                    <li>To install, clone repo and in terminal type 'npm install'</li>
                    <li>To run, open 2 terminal tabs. Run 'webpack -w' in one and 'node server.js'</li>
                    <li>To Filter by ingredient, select an ingredient from the dropdown and the Recipes list will update.  To restore full list, select 'select' at top of dropdown options</li>
                    <li>To see Unique Ingredients, click a check box from however many Recipes you desire.</li>
                </ul>
            </div>
        );
    }
});

module.exports = Instructions;