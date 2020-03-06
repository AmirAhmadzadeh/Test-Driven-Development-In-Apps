import React from 'react';
import CommentItem from 'components/comment/commentItem/commentItem';
import { useSelector } from 'react-redux';
import './style.css';

export default function (){
    const comments = useSelector(state => state.comment.comments ) ; 
    return (
        <ul className='comments'>
            {comments.map((cm,i) => (<CommentItem key={i} cm={cm} />))}
        </ul>
    );
};


