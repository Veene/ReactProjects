import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('updated', expense)
                    console.log('props.expense', props.expense)
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
            }} />
            <p>
                <button onClick={() => {
                    props.dispatch(removeExpense(props.expense.id))
                    props.history.push('/')
                }}>Remove</button>
            </p>
            
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
    
export default connect(mapStateToProps)(EditExpensePage);