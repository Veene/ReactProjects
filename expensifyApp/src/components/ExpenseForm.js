import React from 'react';

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',

    }
    onDescriptionChange = (e) => {
        console.log(e.target.value)
        const description = e.target.value;
        this.setState(() => {
            return {
                description: description
            }
        })
    }
    onNoteChange = (e) => {
        console.log(e.target.value)
        const note = e.target.value;
        this.setState(() => {
            return {
                note: note
            }
        })
    }
    render() {
        return (
            <div>
                <form >
                    <input 
                      type='text'
                      placeholder="Description"
                      autoFocus
                      value={this.state.description}
                      onChange={this.onDescriptionChange}/>
                    <input 
                      type='number'
                      placeholder="Amount" />
                    <textarea 
                      placeholder="Add a note for your expense (optional)"
                      value={this.state.note}
                      onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;