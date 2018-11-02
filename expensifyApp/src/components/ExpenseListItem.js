//export a stateless functional component
//description, amount, create
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            <button onClick={() => {
                dispatch(removeExpense(id))
            }}>Remove</button>
        </div>
    )
}
// const mapStatetoProps = (state) 

export default connect()(ExpenseListItem);