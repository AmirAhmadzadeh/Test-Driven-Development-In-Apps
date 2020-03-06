import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App';
import RootReduxStore from 'root';


ReactDOM.render(
    <RootReduxStore>
        <App />
    </RootReduxStore>,
    document.getElementById('root'));



