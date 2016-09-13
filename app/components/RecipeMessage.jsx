var React = require('react');
var Checkbox = require('Checkbox');



var RecipeMessage = React.createClass({

    boxCheck: function(arr){
        console.log("boxCheck: "+ arr);
        this.props.onCheck(arr);
    },
// className="row">list-group-item-action list-group-item-success


    render: function () {
        var list = this.props.queryResult;
        var boxCheck = this.boxCheck;

        return (
            <div >

                <h4>Recipes</h4>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 fluid">
                    <div className="row">
                        <ul className="col-md-12 fluid list-group inline">
                                {list.map(function(recipe, i){
                                        return <li className="list-group-item" key={i}>
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
                                        </li>
                                    }
                                )}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = RecipeMessage;