import React from 'react';
import App from 'components/App';
import { shallow } from 'enzyme' ;
import CommentBox from 'components/comment/commentBox/commentBox' ; 
import CommentList from 'components/comment/commentList/commentList' ; 

let wrappedAppCmp ; 

beforeEach(() => {
     wrappedAppCmp = shallow(<App/>) ; 
}); 

it('shows a comment box ', () => {
  expect(wrappedAppCmp.find(CommentBox).length).toEqual(1) ; 
});


it('shows a comment List' , () => { 
    expect(wrappedAppCmp.find(CommentList).length).toEqual(1)  ; 
}); 
