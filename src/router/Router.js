
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import Sidebar from "components/Sidebar";
import Topbar from "components/Topbar";
import Footer from "components/Footer";
import Preloader from "components/Preloader";

// screens
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';
import ForgotPassword from 'screens/Auth/ForgotPassword';
import ResetPassword from 'screens/Auth/ResetPassword';
import ServerError from 'screens/Auth/ServerError';
import NotFound from 'screens/Auth/NotFound';
import Lock from 'screens/Auth/Lock';

import Dashboard from 'screens/Dashboard/Dashboard';
import Classroom from 'screens/Classroom/Classroom';

import useToken from 'helpers/useToken';
import { Routes } from 'routes';
import Assignment from 'screens/Assignment/Assignment';
import Quiz from 'screens/Quiz/Quiz';
import MotivationalQuote from 'screens/Quote/MotivationalQuote';
import Settings from 'screens/Settings/Settings';
import User from 'screens/User/User';
import Tutor from 'screens/User/Tutor';
import Student from 'screens/User/Student';
import Admin from 'screens/User/Admin';
import Subject from 'screens/Subject/Subject';

const RouteWithLoader = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
    );
};
  
const RouteWithSidebar = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);
  
    const localStorageIsSettingsVisible = () => {
        return localStorage.getItem('settingsVisible') === 'false' ? false : true
    }
  
    const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);
  
    const toggleSettings = () => {
        setShowSettings(!showSettings);
        localStorage.setItem('settingsVisible', !showSettings);
    }
  
    return (
        <Route {...rest} render={props => (
            <>
            <Preloader show={loaded ? false : true} />
            <Sidebar />
    
            <main className="content">
                <Topbar />
                <Component {...props} />
                <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
            </main>
            </>
        )}
        />
    );
};

function Router() {
    const { token, setToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    }

    return (
        <Switch>
            <RouteWithLoader exact path={Routes.Login.path} component={Login} />
            <RouteWithLoader exact path={Routes.Register.path} component={Register} />
            <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
            <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
            <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
            <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />
            <RouteWithLoader exact path={Routes.NotFound.path} component={NotFound} />

            <RouteWithSidebar exact path={Routes.Dashboard.path} component={Dashboard} />
            <RouteWithSidebar exact path={Routes.Classroom.path} component={Classroom} />
            <RouteWithSidebar exact path={Routes.Assignment.path} component={Assignment} />
            <RouteWithSidebar exact path={Routes.Quiz.path} component={Quiz} />
            <RouteWithSidebar exact path={Routes.MotivationalQuote.path} component={MotivationalQuote} />
            <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
            <RouteWithSidebar exact path={Routes.Subject.path} component={Subject} />
            <RouteWithSidebar exact path={Routes.User.path} component={User} />
            <RouteWithSidebar exact path={Routes.Tutor.path} component={Tutor} />
            <RouteWithSidebar exact path={Routes.Student.path} component={Student} />
            <RouteWithSidebar exact path={Routes.Admin.path} component={Admin} />


            <Redirect to={Routes.NotFound.path} />
        </Switch>
    )
}

export default Router;