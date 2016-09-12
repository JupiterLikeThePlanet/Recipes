var React = require('react');
// var Dropdown = require('react-dropdown');

const options =
    [
        { value: "Baking Powder", label: "Baking Powder"},
        { value: "Baking Soda", label: "Baking Soda"},
        { value: "Beets", label: "Beets"},
        { value: "Butter", label: "Butter"},
        { value: "Cabbage", label: "Cabbage"},
        { value: "Carrot", label: "Carrot"},
        { value: "Celery", label: "Celery"},
        { value: "Cheddar Cheese", label: "Cheddar Cheese"},
        { value: "Chicken", label: "Chicken"},
        { value: "Chicken Stock", label: "Chicken Stock"},
        { value: "Chickpeas", label: "Chickpeas"},
        { value: "Corn Tortillas", label: "Corn Tortillas"},
        { value: "Egg", label: "Egg"},
        { value: "Flour", label: "Flour"},
        { value: "Garlic", label: "Garlic"},
        { value: "Hot Sauce", label: "Hot Sauce"},
        { value: "Masa", label: "Masa"},
        { value: "Milk", label: "Milk"},
        { value: "Oil", label: "Oil"},
        { value: "Olives", label: "Olives"},
        { value: "Onion", label: "Onion"},
        { value: "Parmesan Cheese", label: "Parmesan Cheese"},
        { value: "Peas", label: "Peas"},
        { value: "Pepper", label: "Pepper"},
        { value: "Potato", label: "Potato"},
        { value: "Queso Fresco", label: "Queso Fresco"},
        { value: "Rice", label: "Rice"},
        { value: "Salt", label: "Salt"},
        { value: "Sesame Oil", label: "Sesame Oil"},
        { value: "Soy Sauce", label: "Soy Sauce"},
        { value: "Sugar", label: "Sugar"},
        { value: "Tahini", label: "Tahini"},
        { value: "Tomato", label: "Tomato"},
        { value: "Tomato Sauce", label: "Tomato Sauce"},
        { value: "Vinegar", label: "Vinegar"},
        { value: "Water", label: "Water"},
        { value: "White Wine", label: "White Wine"}
    ]

var Dropdown = React.createClass({

    selectIngredient: function (e) {
        var initState = this.props.list;
        var ingredient = e.target.value;
        // var list = this.props.queryResult
        // var new_list = [];

        if (ingredient.length > 0) {
            var list = this.props.queryResult
            //reset initial state here
            list = initState
            var new_list = [];
            console.log('this.props.queryResult in selectIngredient before map')
            console.log(list);

            for (var i = 0; i < list.length; i++) {
                // console.log('first for loop');
                for (var x = 0; x < list[i].ingredients.length; x++) {
                    // console.log('second for loop');
                    if (ingredient == list[i].ingredients[x]) {
                        // console.log('inner most if statement');
                        new_list.push(list[i])
                        // console.log('if statement new list');
                        // console.log(new_list);
                    }
                }
            }
            console.log(new_list);
            this.props.onChange(new_list);
        }else{
            this.props.onChange(initState);
        };

    },

    render: function () {

        return (
            <div>
                <h2>Select Ingredient</h2>
                <div>
                    <select id="lang" onChange={this.selectIngredient} ref="ingredient">
                        <option value="">select</option>
                        {options.map(function (ingredient) {

                            return <option value={ingredient.value}> {ingredient.label} </option>

                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
});

module.exports = Dropdown;