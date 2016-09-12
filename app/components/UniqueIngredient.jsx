var React = require('react');

var UniqueIngredient = React.createClass({

    // alphabetical: function (a, b) {
    //     var A = a.toLowerCase();
    //     var B = b.toLowerCase();
    //     if (A < B){
    //         return -1;
    //     }else if (A > B){
    //         return  1;
    //     }else{
    //         return 0;
    //     }
    // },

    sortUniqIngredients: function(queryResult) {
        var ingredients_array = [];

        for (var i = 0; i < queryResult.length; i++) {
            console.log('first UNIQ for loop');
            ingredients_array.push(queryResult[i].ingredients)
        };

        var flat_ingredients_array = [].concat.apply([], ingredients_array);
        var uniq = [];

        // for(var i = 0, l = flat_ingredients_array.length; i < l; ++i){
        //     console.log('second UNIQ for loop');
        //     if(!uniq.hasOwnProperty(flat_ingredients_array[i])) {
        //         uniq.push(flat_ingredients_array[i]);
        //     }
        // };

        var hash = {};
        for(var i = 0, l = flat_ingredients_array.length; i < l; ++i){
            if(!hash.hasOwnProperty(flat_ingredients_array[i])) {
                uniq.push(flat_ingredients_array[i]);
                hash[flat_ingredients_array[i]] = 1;
            }
        }
        // return a;


        uniq.sort(function (a, b) {
            var A = a.toLowerCase();
            var B = b.toLowerCase();
            return (A < B) ? -1 : (A > B) ? 1 : 0;
        });


        //
        // var uniq_sorted = uniq.join(", ");
        //
        // console.log('UNIQUE ARRAY SORTED');
        // console.log(uniq_sorted);
        //
        // return uniq_sorted

        // var alt_array = []
        // var alt_list = ["Rice", "Chicken Stock", "Parmesan Cheese", "White Wine", "Butter", "Salt", "Pepper", "Peas", "Tomato Sauce", "Tomato", "Corn Tortillas", "Cheddar Cheese", "Onion", "Olives", "Salt", "Chicken", "Garlic", "Chickpeas", "Salt", "Tahini", "Hot Sauce", "Milk", "Flour", "Sugar", "Butter", "Baking Powder", "Baking Soda", "Egg", "Salt", "Water", "Potato", "Beets", "Butter", "Onion", "Salt", "Celery", "Carrot", "Cabbage", "Pepper", "Vinegar", "Tomato", "Butter", "Onion", "Salt", "Pepper", "Potato", "Egg", "Flour", "Baking Powder", "Masa", "Water", "Queso Fresco", "Onion", "Oil", "Rice", "Egg", "Soy Sauce", "Sesame Oil", "Chicken", "Carrot", "Peas"]
        // for(var i = 0, l = alt_list.length; i < l; ++i){
        //     if(!alt_array.hasOwnProperty(alt_list[i])) {
        //         alt_array.push(alt_list[i]);
        //     }
        // };
        // console.log('alt array');
        // console.log(alt_array);

////////////////////////////////////////////
        console.log('UNIQUE ARRAY');
        console.log(uniq);
        // this.props.setUniqList(uniq);
        return uniq;
    },




render: function () {
        var queryResult = this.props.queryResult;
        var uniq_ingredients = this.sortUniqIngredients(queryResult);
        // var uniq_ingredients = this.props.uniqIngredients

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