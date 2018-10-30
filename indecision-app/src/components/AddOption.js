import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleOnSubmit= (e) => {
        //remember to prevent default on submits which refresh full page
        e.preventDefault();
        const option = e.target.option1.value.trim();
        const error = this.props.handleAddOptions(option)
        
        this.setState(() => {
            return {
                error: error
            }
        })
        if(!error) {
            e.target.option1.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleOnSubmit}>
                    <input className="add-option-input" type='text' name="option1"  />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;