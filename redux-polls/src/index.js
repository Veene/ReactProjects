import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import reducers from './reducers/index'
import { Provider } from 'react-redux'
import middleware from './middleware/index'

const store = createStore(reducers, middleware)

console.log(store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))