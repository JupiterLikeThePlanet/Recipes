var React = require('react');

const checked_array = []

var Checkbox = React.createClass({
    getInitialState: function () {
        return {
            isChecked: false
            // checked_boxes: checked_array
        };
    },

    toggleCheckbox: function () {
        // console.log("Recipe Value: " + recipe);

        this.setState({
            isChecked: !this.state.isChecked
        });
        // console.log("THIS IS STATE CHECK");
        // console.log(!this.state.isChecked);

        var recipe = JSON.stringify(this.props.recipe, null, 4);
        console.log(recipe);

        if (!this.state.isChecked === true) {
            checked_array.push(recipe);
            console.log('New Pushed Array: '+ checked_array);
        }else{
            checked_array.pop(recipe) || console.log('not in there');
            console.log('New popped Array: '+ checked_array);
        };
        // var update_array = checked_array
        // this.props.onToggle(checked_array);
        // this.setState({
        //     checked_boxes: update_array
        // })

        this.props.handleCheckboxChange(checked_array);
    },

    // onChange={this.handleChange}

    render: function () {
        var recipe = this.props.recipe.name;
        // var ref_check = this.refs.check.value;
        // console.log('this.refs.state.checked_boxes : ' + ref_check);
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