import React, {Component} from 'react';
import { Link } from 'react-router-dom'

const Portfolio = () => (
    <div>
        PORTFOLIO MAIN PAGE
        <Link to="/portfolio/1">Thing 1</Link>
        <Link to="/portfolio/2">Thing 2</Link>
    </div>
)
export default Portfolio;