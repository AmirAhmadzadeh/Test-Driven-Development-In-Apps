
import {
  SIGN_IN

} from './../actions/actions';

const initState = {
  auth: false
};

export default function (state = initState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        auth: action.payload
      }

    default:
      return state;
  }
} 