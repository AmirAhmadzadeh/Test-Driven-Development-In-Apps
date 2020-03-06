import {
    COMENT_SEND
} from 'store/actions/actions';

import commentsReducer from 'store/reducers/comment.js';




describe('comment Reducer Tests', () => {

    it('handles the Save Comment Reducer ', () => {

        const action = {
            comment: 'New Comment',
            type: COMENT_SEND
        };

        const currentState = { comments : [] }

        const newState = commentsReducer( currentState , action);

        expect(newState.comments).toEqual(['New Comment']);

    });


    it('handles the Unknown Actions ' , () => { 
        const action = { 
            type : 'cancjkan'   
        }
        const currentState = { comments :[] }  ; 
        const newState = commentsReducer(currentState , action) ; 

        expect(newState).toEqual(currentState) ;     

    }); 
})