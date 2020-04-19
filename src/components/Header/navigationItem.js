import React from 'react';
import { Link } from 'react-router-dom';


function navigationItem({ item }) {
    return (
        <li className='navigation__item'
            className='nav-item mr-2'>
            <Link
                to={`${item.link}`}                
                className='navigation__link nav-link'>
                {item.item}
            </Link>
        </li>
    );
}


export default navigationItem; 