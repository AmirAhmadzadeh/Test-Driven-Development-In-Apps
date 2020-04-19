
import {
     createStore,
     combineReducers,
     compose,
     applyMiddleware
} from 'redux';

import rThunk from 'redux-thunk';

import commentReducer from 'store/reducers/comment';
import authReducer from 'store/reducers/auth';

const rootReducer = combineReducers({
     comment: commentReducer,
     auth: authReducer
});


const composeEnhaunster = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


// initioal State 
const initioalState = {
     comment: {
          comments: []
     },
     auth: false
}

const configureStore = (initState = initioalState) => {
     return createStore(rootReducer, initState, composeEnhaunster(applyMiddleware(rThunk)));
}


export default configureStore;