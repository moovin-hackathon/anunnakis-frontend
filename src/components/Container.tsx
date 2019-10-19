import React from 'react'
import './Container.scss'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from '../toolkit/router'

import Dashboard from '../pages/Dashboard'
import RouteNotFound from '../pages/RouteNotFound'
import Accesses from '../pages/Accesses'
import Search from '../pages/Search'
import Stock from '../pages/Stock'
import Sales from '../pages/Sales'

const Container: React.FC = () => {
    return (
        <div className='Container'>
            <BrowserRouter>
                <Switch>
                    <Redirect
                        exact
                        from="/"
                        to={routes.dashboard}
                    />
                    <Route
                        exact
                        path={routes.dashboard}
                        children={<Dashboard />}
                    />
                    <Route
                        exact
                        path={routes.accesses}
                        children={<Accesses />}
                    />
                    <Route
                        exact
                        path={routes.search}
                        children={<Search />}
                    />
                    <Route
                        exact
                        path={routes.stock}
                        children={<Stock />}
                    />
                    <Route
                        exact
                        path={routes.sales}
                        children={<Sales />}
                    />
                    <Route
                        children={<RouteNotFound />}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Container