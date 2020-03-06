import React from 'react';
import App from 'components/App';
import { mount } from 'enzyme';
import RootReduxStore from 'root';
import CommentItem from '../components/comment/commentItem/commentItem';
import moxios from 'moxios';

let wrappedApp;



describe('comments Integration Test', () => {

    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
            response: [{ body: 'ResponseFetched#1' }, { body: 'ResponseFetched#2' }]
            , status: 200
        });
    });

    afterEach(() => {
        moxios.uninstall();
    })

    it('should fetch data from api and display CommentItems ', (done) => {

        wrappedApp = mount(
            <RootReduxStore>
                <App />
            </RootReduxStore>
        );
            
        wrappedApp.find('button.fetch-btn').simulate('click');

        //introducing a tiny  Little Pause 
        setTimeout(() => {
            wrappedApp.update();
            expect(wrappedApp.find('li').length).toEqual(2);
            done();
        }, 100);

    });

}); 
