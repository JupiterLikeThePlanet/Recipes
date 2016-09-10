var React = require('react');
// var recipe_object = require('recipe_object');

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }

// {list.map(function(listValue){
//     return <li>{listValue}</li>;
// })}

    render() {
        var full_recipe_list=[];
        var list_length = this.state.list.length;
        var list = this.state.list;

        return (

            <div>
                <h2>Recipes</h2>
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
    };
}

module.exports = Recipes;

var data = [{name:'Jhon', age:28, city:'HO'},{name:'Onhj', age:82, city:'HN'},{name:'Nohj', age:41, city:'IT'}]

// var Recipe = React.createClass({
//
//     render: function() {
//
//         var _data = this.props.info;
//         console.log(_data);
//         return(
//             <div>
//                 {_data.map(function(object, i){
//                     return <div className={"row"} key={i}>
//                         {[ object.name ,
//                             <b className="fosfo" key={i}> {object.city} </b> , // remove the key
//                             object.age
//                         ]}
//                     </div>;
//                 })}
//             </div>
//         );
//     }
// });
//
// React.render(<Recipe info={data} />, document.body);