import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from '../src/containers/IndecisionApp'

class App extends React.Component {
    render() {
        return <IndecisionApp />
    }
}
ReactDOM.render(<App />, document.getElementById('app'))





