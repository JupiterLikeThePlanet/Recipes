var React = require('react');
var RecipeForm = require('RecipeForm');
var RecipeMessage = require('RecipeMessage');
var UniqueIngredient = require('UniqueIngredient');
var Dropdown = require('Dropdown');


var Recipes = React.createClass({

    getDefaultProps: function () {
        return {
            list: [
                {
                    "name": "Risotto",
                    "type": "Italian",
                    "cook_time": 60,
                    "ingredients": ["Rice", "Chicken Stock", "Parmesan Cheese", "White Wine", "Butter", "Salt", "Pepper", "Peas"]
                },
                {
                    "name": "Enchiladas",
                    "type": "Mexican",
                    "cook_time": 50,
                    "ingredients": ["Tomato Sauce", "Tomato", "Corn Tortillas", "Cheddar Cheese", "Onion", "Olives", "Salt", "Chicken"]
                },
                {
                    "name": "Hummus",
                    "type": "Middle Eastern",
                    "cook_time": 10,
                    "ingredients": ["Garlic", "Chickpeas", "Salt", "Tahini", "Hot Sauce"]
                },
                {
                    "name": "Pancakes",
                    "type": "Breakfast",
                    "cook_time": 25,
                    "ingredients": ["Milk", "Flour", "Sugar", "Butter", "Baking Powder", "Baking Soda", "Egg", "Salt"]
                },
                {
                    "name": "Borscht",
                    "type": "Russian",
                    "cook_time": 75,
                    "ingredients": ["Water", "Potato", "Beets", "Butter", "Onion", "Salt", "Celery", "Carrot", "Cabbage", "Pepper", "Vinegar", "Tomato"]
                },
                {
                    "name": "Pierogi",
                    "type": "Polish",
                    "cook_time": 105,
                    "ingredients": ["Butter", "Onion", "Salt", "Pepper", "Potato", "Egg", "Flour", "Baking Powder"]
                },
                {
                    "name": "Pupusa",
                    "type": "Salvadoran",
                    "cook_time": 40,
                    "ingredients": ["Masa", "Water", "Queso Fresco"]
                },
                {
                    "name": "Fried Rice",
                    "type": "Chinese",
                    "cook_time": 28,
                    "ingredients": ["Onion", "Oil", "Rice", "Egg", "Soy Sauce", "Sesame Oil", "Chicken", "Carrot", "Peas"]
                }
            ],
            queryResult: '',
            checked_array: ''
        };
    },

    getInitialState: function () {
        return {
            list: this.props.list,
            queryResult: this.props.list,
            checked_array: ''
        };
    },

    searchIngredient: function (new_list){
            this.setState({
                queryResult: new_list
            });
            console.log(new_list);
    },

    handleCheck: function(checked_list){
        console.log("handleCheck" + checked_list);
        this.setState({
            checked_array: checked_list
        })
    },


    render() {
        var list = this.state.list;
        var queryResult = this.state.queryResult;
        var checked_array = this.state.checked_array;
        console.log('CHECKED_ARRAY in RECIPE render: ' + checked_array)

        return (
            <div>
                <h2>Recipes</h2>

                <Dropdown onChange={this.searchIngredient}
                          list={list}
                          queryResult={queryResult}
                          placeholder="Select an ingredient"/>

                <UniqueIngredient queryResult={checked_array} />

                <RecipeMessage queryResult={queryResult}
                               onCheck={this.handleCheck}/>

            </div>
        );
    }
});

module.exports = Recipes;