import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
)
const AddExpensePage = () => (
    <div>
        This is from my addExpense component
    </div>
)
const EditExpensePage = () => (
    <div>
        This is from my EditExpensePage component
    </div>
)
const HelpPage = () => (
    <div>
        This is from my HelpPage component
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))





