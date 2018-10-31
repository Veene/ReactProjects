import React, {Component} from 'react';


const PortfolioPages = (props) => {
    console.log(props)
    return (
        <div>
            <p>Welcome to Thing {props.match.params.id}</p>
            <p>BLAH BLAH BLAH </p>
        </div>
    )
}
    
export default PortfolioPages;