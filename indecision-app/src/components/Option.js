import React from 'react'

const Option = (props) => (
        <div>
            {props.optionText}
                <button
                    className="button button--link"
                    onClick={() => {
                        props.handleDeleteOptionSingle(props.optionText)
                    }}
                >
                        
                    delete
            </button>
        </div>
    ) 


export default Option;