var React = require('react');
var RecipeForm = require('RecipeForm');
var RecipeMessage = require('RecipeMessage');

// class Recipes extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [
//                 {
//                     "name": "Risotto",
//                     "type": "Italian",
//                     "cook_time": 60,
//                     "ingredients": ["Rice", "Chicken Stock", "Parmesan Cheese", "White Wine", "Butter", "Salt", "Pepper", "Peas"]
//                 },
//                 {
//                     "name": "Enchiladas",
//                     "type": "Mexican",
//                     "cook_time": 50,
//                     "ingredients": ["Tomato Sauce", "Tomato", "Corn Tortillas", "Cheddar Cheese", "Onion", "Olives", "Salt", "Chicken"]
//                 },
//                 {
//                     "name": "Hummus",
//                     "type": "Middle Eastern",
//                     "cook_time": 10,
//                     "ingredients": ["Garlic", "Chickpeas", "Salt", "Tahini", "Hot Sauce"]
//                 },
//                 {
//                     "name": "Pancakes",
//                     "type": "Breakfast",
//                     "cook_time": 25,
//                     "ingredients": ["Milk", "Flour", "Sugar", "Butter", "Baking Powder", "Baking Soda", "Egg", "Salt"]
//                 },
//                 {
//                     "name": "Borscht",
//                     "type": "Russian",
//                     "cook_time": 75,
//                     "ingredients": ["Water", "Potato", "Beets", "Butter", "Onion", "Salt", "Celery", "Carrot", "Cabbage", "Pepper", "Vinegar", "Tomato"]
//                 },
//                 {
//                     "name": "Pierogi",
//                     "type": "Polish",
//                     "cook_time": 105,
//                     "ingredients": ["Butter", "Onion", "Salt", "Pepper", "Potato", "Egg", "Flour", "Baking Powder"]
//                 },
//                 {
//                     "name": "Pupusa",
//                     "type": "Salvadoran",
//                     "cook_time": 40,
//                     "ingredients": ["Masa", "Water", "Queso Fresco"]
//                 },
//                 {
//                     "name": "Fried Rice",
//                     "type": "Chinese",
//                     "cook_time": 28,
//                     "ingredients": ["Onion", "Oil", "Rice", "Egg", "Soy Sauce", "Sesame Oil", "Chicken", "Carrot", "Peas"]
//                 }
//             ]
//         }
//     }
//
//     searchIngredient(ingredient){
//         var new_list = [];
//         console.log(this.state.list)
//         // var names = list.map(function(list_item){ for(var i = 0; i < list.length; i++){return list[i].name}}
//
//         for (var i = 0; i < list.length; i++) {
//             for (var i = 0; i < list.ingredient.length; i++) {
//                 if (ingredient === list.ingredient[i]) {
//                     return new_list.push(list[i].name)
//                 }else{
//                     new_list = "Ingredient not found";
//                 }
//             }
//         }
//         this.setState({
//             list : new_list
//         })
//         console.log(new_list);
//
//     }
//
//
//
// // {list.map(function(listValue){
// //     return <li>{listValue}</li>;
// // })}
//
//     render() {
//         var list = this.state.list;
//         return (
//
//             <div>
//                 <h2>Recipes</h2>
//                 <RecipeForm onSearch={this.searchIngredient}/>
//                 <RecipeMessage list={list}/>
//             </div>
//         );
//     };
// }
//
// module.exports = Recipes;


var Recipes = React.createClass({
    getInitialState: function () {
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
            ]
        };
    },


    searchIngredient: function (new_list){
        // var new_list = [];
        // console.log(this.state.list)
        // // var names = list.map(function(list_item){ for(var i = 0; i < list.length; i++){return list[i].name}}
        //
        // for (var i = 0; i < list.length; i++) {
        //     for (var i = 0; i < list.ingredient.length; i++) {
        //         if (ingredient === list.ingredient[i]) {
        //             return new_list.push(list[i].name)
        //         }else{
        //             new_list = "Ingredient not found";
        //         }
        //     }
        // }
        // this.setState({
        //     list : new_list
        // })
        // console.log(new_list);
        this.setState({
            list: new_list
        });
        console.log(new_list);

    },

    render() {
        var list = this.state.list;
        return (

            <div>
                <h2>Recipes</h2>
                <RecipeForm onSearch={this.searchIngredient} list={list}/>
                <RecipeMessage list={list}/>
            </div>
        );
    }
});

module.exports = Recipes;