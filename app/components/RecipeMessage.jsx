var React = require('react');
var Checkbox = require('Checkbox');
var UniqueIngredient = require('UniqueIngredient');



var RecipeMessage = React.createClass({

    boxCheck: function(arr){
        console.log("boxCheck: "+ arr);
        this.props.onCheck(arr);
    },

    render: function () {
        var list = this.props.queryResult;
        var boxCheck = this.boxCheck;

        return (
            <div>

                <h4>Recipes</h4>
                <div>

                    <ul>
                        {list.map(function(recipe, i){
                                return <li key={i}>
                                    <Checkbox recipe={recipe} handleCheckboxChange={boxCheck}/>
                                    Dish: {[recipe.name]}
                                    <br/>
                                    Type: {[recipe.type]}
                                    <br/>
                                    Cook Time: {[recipe.cook_time]}
                                    <br/>

                                    Ingredients: {[recipe.ingredients.map(function (ingredient, i) {

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