import {
    COMENT_SEND,
} from 'store/actions/actions';

import { sendComment } from 'store/actions';

describe('Save Comment', () => {
    let returnedAction ; 
    
    beforeEach(() => {
     returnedAction = sendComment('A Comment For Test');
    });

    it(' handles save Comment action creator ', () => {

        expect(returnedAction.type).toEqual(COMENT_SEND);
    });


    it('has a correct comment Text', () => {
        expect(returnedAction.comment).toEqual('A Comment For Test');
    })
}); 