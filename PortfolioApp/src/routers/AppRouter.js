import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Portfolio from '../components/Portfolio'
import Home from '../components/Home'
import PortfolioPages from '../components/PortfolioPages'
import Contact from '../components/Contact'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/portfolio/:id" component={PortfolioPages} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;