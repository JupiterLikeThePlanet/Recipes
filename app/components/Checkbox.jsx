var React = require('react');

const checked_array = []

var Checkbox = React.createClass({
    getInitialState: function () {
        return {
            isChecked: false
        };
    },

    toggleCheckbox: function () {

        this.setState({
            isChecked: !this.state.isChecked
        });

        // var recipe = JSON.stringify(this.props.recipe, null, 4);
        var recipe = this.props.recipe
        console.log(recipe);

        if (!this.state.isChecked === true) {
            checked_array.push(recipe);
            console.log('New Pushed Array: '+ checked_array);
        }else{
            checked_array.pop(recipe) || console.log('not in there');
            console.log('New popped Array: '+ checked_array);
        };

        this.props.handleCheckboxChange(checked_array);
    },


    render: function () {
        var recipe = this.props.recipe.name;
        console.log("Recipe: " + recipe + " is set to " + this.state.isChecked);
        return (
            <div>
                <div>
                    <input type="checkbox"
                           value={this.props.recipe}
                           checked={this.state.isChecked}
                           onChange={this.toggleCheckbox} />
                </div>
            </div>
        )
    }
})



module.exports = Checkbox;