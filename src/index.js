import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import RootReduxStore from 'root';
import {  BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';


ReactDOM.render(
    <RootReduxStore>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </RootReduxStore>,
    document.getElementById('root'));



