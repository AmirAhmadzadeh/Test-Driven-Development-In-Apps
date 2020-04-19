import React, { Component } from 'react'
import Layout from './Layout';
import CommentList from './comment/commentList/commentList';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout classes={['container', 'text-center']}>
                <CommentList />
            </Layout>)
    }
};

export default Home; 