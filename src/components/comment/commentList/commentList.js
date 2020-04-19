import React from 'react';
import CommentItem from 'components/comment/commentItem/commentItem';
import { useSelector } from 'react-redux';
import './style.scss';

export default function () {
    const comments = useSelector(state => state.comment.comments);

    if (comments.length === 0) return 'for now we dont have any comment ';

    return (
        <>
            <h1 className='h1'>
                Comments List (This application tested very good working)
            </h1>
            <ul className='p-0 comments'>
                {comments.map((cm, i) => (<CommentItem key={i} cm={cm} />))}
            </ul>
        </>
    );
};



