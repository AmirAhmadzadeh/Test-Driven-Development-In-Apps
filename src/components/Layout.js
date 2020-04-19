import React from 'react';
import Header from './Header/Header';


export default function ({ classes, children }) {
    return (
        <div className={classes.join(' ')}>
            <Header />
            {children}
        </div>
    );
}
