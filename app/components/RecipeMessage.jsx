var React = require('react');



var RecipeMessage = React.createClass({
    render: function () {
        var list = this.props.list;
        return (
            <div>
                <h2>Recipe Message</h2>
                <div>
                    <ul>
                        {list.map(function(recipe, i){
                                return <li key={i}>
                                    Dish: {[recipe.name]}
                                    <br/>
                                    Type: {[recipe.type]}
                                    <br/>
                                    Cook Time: {[recipe.cook_time]}
                                    <br/>
                                    Ingredients: {[recipe.ingredients.map(function(ingredient, i){

                                        return <p key={i}> {[ingredient]} </p>
                                    }
                                )]}

                                    <br/>
                                    <hr/>
                                </li>
                            }
                        )}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = RecipeMessage;