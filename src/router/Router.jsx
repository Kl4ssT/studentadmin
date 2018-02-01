import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from '../containers/Main';
import Teachers from '../containers/Teachers';
import Departments from '../containers/Departments';
import Auth from "../containers/Auth/Auth";

export const checkAuth = () => {
    const isAuth = localStorage.getItem('token');

    return isAuth !== null;
};

const Router = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                { props.children }
                <Switch>
                    <Route path="/admin" exact render={() =>
                        !checkAuth() ? <Redirect to="/admin/auth" /> : <Main />
                    } />
                    <Route path="/admin/teachers" exact render={() =>
                        !checkAuth() ? <Redirect to="/admin/auth" /> : <Teachers />
                    } />
                    <Route path="/admin/departments" exact render={() =>
                        !checkAuth() ? <Redirect to="/admin/auth" /> : <Departments />
                    } />
                    <Route path="/admin/auth" exact component={Auth} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;