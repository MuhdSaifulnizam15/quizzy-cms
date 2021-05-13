
import React, { useState } from 'react';
import { BrowserRouter as RouteIt, Switch, Route, Redirect } from 'react-router-dom';
import ForgotPassword from 'screens/Auth/ForgotPassword';
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';
import Dashboard from 'screens/Dashboard/Dashboard';
import Classroom from 'screens/Classroom/Classroom';
import useToken from 'helpers/useToken';

function Router() {
    const { token, setToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    }

    return (
        <RouteIt>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />

                <Route path="/classroom" component={Classroom} />

                {/* Redirect all 404's to home */}
                <Redirect to='/' />
            </Switch>
        </RouteIt>
    )
}

export default Router;