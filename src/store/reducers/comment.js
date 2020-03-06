import {
    COMENT_SEND,
    FETCH_COMMENTS,
    FETCH_COMMENTS_SUCCESS
} from '../actions/actions';


const commnetReducer = (state, action) => {
    switch (action.type) {
        case COMENT_SEND:
            return {
                ...state,
                comments: [...state.comments, action.comment]
            }
        case FETCH_COMMENTS_SUCCESS : 
            const comments = action.payload.map(coment => (coment.body)) ; 
            return {
                ...state , 
                comments : [...state.comments , ...comments]
            }    
        default:
            return {
                ...state
            }
    }
}

export default commnetReducer; 