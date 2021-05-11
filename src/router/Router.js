
import React, { Component } from 'react';
import { HashRouter as RouteIt, Switch, Route } from 'react-router-dom';
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';
import Dashboard from 'screens/Dashboard/Dashboard';


class Router extends Component {
    render() {
        return (
            <RouteIt>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </RouteIt>
        )
    }
}

export default Router;