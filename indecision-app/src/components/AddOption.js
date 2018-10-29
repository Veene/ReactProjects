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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' placeholder="add option" name="option1"  />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;