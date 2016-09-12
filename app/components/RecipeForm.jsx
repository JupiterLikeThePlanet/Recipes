var React = require('react');



var RecipeForm = React.createClass({

    onFormSubmit: function(e){
        e.preventDefault();
        var initState = this.props.list;
        var list = this.props.queryResult
        var ingredient = this.refs.ingredient.value
        var new_list = [];

        if (ingredient.length > 0) {
            this.refs.ingredient.value = '';
            // var new_list = [];
            // var list = this.props.list;
            // var list = this.props.queryResult
            console.log('this.props.queryResult in onFormSubmit before map')
            console.log(list);


            for (var i = 0; i < list.length; i++) {
                console.log('first for loop');
                for (var x = 0; x < list[i].ingredients.length; x++) {
                    console.log('second for loop');
                    if (ingredient == list[i].ingredients[x]) {
                        console.log('inner most if statement');
                        // new_list.push(list[i].name)
                        new_list.push(list[i])
                        console.log('if statement new list');
                        console.log(new_list);
                    }else{
                        console.log('hit the else')
                        // new_list = "Ingredient not found";
                    }
                }
            }
            console.log(new_list);
            this.props.onSearch(new_list);
        }else{
            this.props.onSearch(initState);
        };


        },


    render: function () {
        var props_list = this.props.list;
            console.log('props_list');
            console.log(props_list);
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="ingredient" placeholder="Enter query here" />
                    </div>
                    <div>
                        <button>Search</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = RecipeForm;