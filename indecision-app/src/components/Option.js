import React from 'react'

const Option = (props) => {
    return(
        <div>
            {props.optionText}
                <button 
                    onClick={() => {
                        props.handleDeleteOptionSingle(props.optionText)
                    }}
                >
                        
                    delete
            </button>
        </div>
    ) 
}

export default Option;