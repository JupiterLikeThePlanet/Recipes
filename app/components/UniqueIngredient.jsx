var React = require('react');

var UniqueIngredient = React.createClass({

    sortUniqIngredients: function(queryResult) {
        var ingredients_array = [];

        for (var i = 0; i < queryResult.length; i++) {
            ingredients_array.push(queryResult[i].ingredients)
        };

        var flat_ingredients_array = [].concat.apply([], ingredients_array);
        var uniq = [];
        var hash = {};
        for(var i = 0, l = flat_ingredients_array.length; i < l; ++i){
            if(!hash.hasOwnProperty(flat_ingredients_array[i])) {
                uniq.push(flat_ingredients_array[i]);
                hash[flat_ingredients_array[i]] = 1;
            }
        };

        uniq.sort(function (a, b) {
            var A = a.toLowerCase();
            var B = b.toLowerCase();
            return (A < B) ? -1 : (A > B) ? 1 : 0;
        });

        return uniq;
    },


render: function () {
        var queryResult = this.props.queryResult;
        var uniq_ingredients = this.sortUniqIngredients(queryResult);
        console.log('QR from Uniq');
        console.log(queryResult);

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