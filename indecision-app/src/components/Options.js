import React from 'react';
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <button 
                onClick={props.delete}>REMOVE</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map(option => {
                    return <Option 
                                key={option}
                                optionText={option} 
                                handleDeleteOptionSingle={props.handleDeleteOptionSingle} />
                })
            }
        </div>
    )
}
export default Options;