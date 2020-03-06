import React from 'react';

import { mount } from 'enzyme';

import CommentItem from '../comment/commentItem/commentItem';

import CommentList from '../comment/commentList/commentList';

import RootReduxStore from 'root';

let wrappedCmp;

beforeEach(() => {

    const initState = {
        comment: {
            comments: ['First Comment', 'second Comment']
        }
    };

    wrappedCmp = mount(

        <RootReduxStore initState={initState}>

            <CommentList />

        </RootReduxStore>
    );
});


afterEach(() => {

    wrappedCmp.unmount();

});


it('has a comment item for each Comment ', () => {

    expect(wrappedCmp.find(CommentItem).length).toEqual(2);

    console.log(wrappedCmp.find(CommentItem).length);

});



it('tesxt should be visible ! ', () => {

    expect(wrappedCmp.render().text()).toContain('First Comment');

    expect(wrappedCmp.render().text()).toContain('second Comment');

}); 