import React from 'react'; 
import configureStore from 'store/configureStore' ;
import { Provider } from 'react-redux';


export default function root(props) {
    return (
        <Provider store={configureStore(props.initState)}>
            { props.children } 
        </Provider>
    )
};


