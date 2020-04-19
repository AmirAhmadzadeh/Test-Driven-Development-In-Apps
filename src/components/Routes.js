import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './../components/App';
import Home from '../components/Home';


export default function () {
    return (
        <Switch>
            <Route
                component={Home}
                path="/"
                exact
            />

            <Route
                component={App}
                path="/commentList"
                exact
            />
        </Switch>
    )
}
