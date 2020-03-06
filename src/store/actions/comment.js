

import {
    COMENT_SEND,
    FETCH_COMMENTS,
    FETCH_COMMENTS_SUCCESS
} from './actions';

import axios from 'axios';

export const sendComment = (comment) => {
    return {
        type: COMENT_SEND,
        comment
    }
}

export const fetchComments = () => {
    return dispch => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                dispch(fetchCommentsSuccess(response.data))
            })
            .catch(err => {
                console.log('we have Error [In  the  fetch comments]');
            })
    }
};

export const fetchCommentsSuccess = (payload) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload
    }
};  