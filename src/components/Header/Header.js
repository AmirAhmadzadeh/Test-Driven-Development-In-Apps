import React, { useEffect } from 'react';
import MenuItem from './navigationItem';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from './../../store/actions/'
import getMenu from '../helper/helper';


export default function () {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);


    function AuthButtons({ authenticate }) {

        if (!authenticate.auth) {
            return (
                <button onClick={() => dispatch(signIn(true))}
                    className='btn btn-secondary btn-outline-lg'>
                    SignIn
              </button>
            )
        } else {
            return (
                <button
                    Logout
                    onClick={() => dispatch(signIn(false))}
                    className='btn btn-outline-lg btn-danger'>
                    Logout
                </button>

            )
        }


    }

    return (
        <div className='container mb-4'>
            <nav>
                <ul className='nav text-center p-2'>
                    <li>
                        <AuthButtons authenticate={auth} />
                    </li>
                    {
                        getMenu(auth).map(menuItem => {
                            return <MenuItem key={menuItem.item} item={menuItem} />

                        })
                    }

                </ul>
            </nav>
        </div>
    )
}