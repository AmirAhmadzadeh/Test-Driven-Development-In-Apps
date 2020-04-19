import { mount } from 'enzyme';
import React from 'react';
import CommentBox from 'components/comment/commentBox/commentBox';
import RootReduxStoreWrapper from 'root';

//wrapped Component 
let wrappedCommentBoxCmp;


// before Each testing mounting ! 
beforeEach(() => {
    const initState = {
        comment: {
            comments: ['firstComment', 'second Comment']
        }
    };
    wrappedCommentBoxCmp = mount(
        <RootReduxStoreWrapper initState={initState}>
            <CommentBox />
        </RootReduxStoreWrapper>
    );
});

// after testing clean up ! 
afterEach(() => {
    wrappedCommentBoxCmp.unmount();
});

// this component should has a textarea and a button 
it('has a text area and Two button', () => {
    expect(wrappedCommentBoxCmp
        .find('textarea')
        .length)
        .toEqual(1);

    expect(wrappedCommentBoxCmp.find('button')
        .length)
        .toEqual(2);
});

describe('text area tests ', () => {

    beforeEach(() => {
        wrappedCommentBoxCmp
            .find('textarea')
            .simulate('change', {
                target: {
                    value: 'a comment for test'
                }
            });

        wrappedCommentBoxCmp.update();
    });

    it('has a textarea that users can type in ', () => {
        expect(wrappedCommentBoxCmp
            .find('textarea')
            .prop('value')).toEqual('a comment for test');
    });


    it('empty the textarea after submitting the form', () => {
        expect(wrappedCommentBoxCmp
            .find('textarea')
            .prop('value')).toEqual('a comment for test');


        wrappedCommentBoxCmp
            .find('form')
            .simulate('submit');


        wrappedCommentBoxCmp.update();

        expect(wrappedCommentBoxCmp
            .find('textarea')
            .prop('value')).toEqual('');

    });
});

