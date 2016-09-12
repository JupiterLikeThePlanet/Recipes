var React = require('react');

var UniqueIngredient = React.createClass({

    sortUniqIngredients: function(queryResult) {
        var ingredients_array = [];

        for (var i = 0; i < queryResult.length; i++) {
            console.log('first UNIQ for loop');
            ingredients_array.push(queryResult[i].ingredients)
        };

        var flat_ingredients_array = [].concat.apply([], ingredients_array);
        var uniq = [];

        for(var i = 0, l = flat_ingredients_array.length; i < l; ++i){
            console.log('second UNIQ for loop');
            if(!uniq.hasOwnProperty(flat_ingredients_array[i])) {
                uniq.push(flat_ingredients_array[i]);
            }
        };
        console.log('UNIQUE ARRAY');
        console.log(uniq);
        // this.props.setUniqList(uniq);
        return uniq;
    },

    render: function () {
        var queryResult = this.props.queryResult;
        var uniq_ingredients = this.sortUniqIngredients(queryResult);
        // var uniq_ingredients = this.props.uniqIngredients
        console.log('uniq_ingredients props');
        console.log(uniq_ingredients);
        return (
            <div>
                <hr/>
                <h4>Unique Ingredients</h4>
                    <ul>
                        {uniq_ingredients.map(function (ingredient) {
                           return <li> {ingredient} </li>
                        })
                        }
                    </ul>

                <hr/>
            </div>
        );
    }
});

module.exports = UniqueIngredient;