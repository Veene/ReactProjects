import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from '../src/containers/IndecisionApp'
import 'normalize.css/normalize.css';
import './styles/styles.scss'


class App extends React.Component {
    render() {
        return <IndecisionApp />
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))





