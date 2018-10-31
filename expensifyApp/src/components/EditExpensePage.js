import React, {Component} from 'react';

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            <p>This is from my EditExpensePage component</p>
            <p>editing the expense with Params.id: {props.match.params.id}</p>
        </div>
    )
}
    
export default EditExpensePage;