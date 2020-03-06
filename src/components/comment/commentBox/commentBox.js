import React, { useRef, useEffect } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { sendComment, fetchComments } from 'store/actions';

export default function (props) {

    const dispatch = useDispatch();
    const saveComment = (cm) => dispatch(sendComment(cm));
    const fetchCommentsHandler = () => dispatch(fetchComments());
    const [comment, setComment] = React.useState('');
    const textFoucus = useRef();
    const focusOnInputHandler = () => {
        textFoucus.current.focus();
    };
    useEffect(() => { focusOnInputHandler(); }, []);
    const commentSendHandler = (e) => {
        e.preventDefault();
        if (comment.length === 0) return;
        saveComment(comment);
        setComment('');
    };

    const enterPressedHandler = (e) => {
        if (e.key === 'Enter') {
            commentSendHandler(e);
        }
    };



    return (
        <React.Fragment>
            <form
                onSubmit={commentSendHandler}
                className='commentBox'
                onKeyPress={enterPressedHandler}>
                <div>
                    <textarea
                        className='commentInp'
                        value={comment}
                        type='text'
                        onChange={(e) => setComment(e.target.value)}
                        rows={5}
                        autoFocus
                        ref={textFoucus} />
                </div>
                <div>
                    <button
                        className='commentSubmitButton'
                        type='submit'>
                        send
                    </button>
                </div>
            </form>

            <div>
                <button
                    className='fetch-btn'
                    onClick={fetchCommentsHandler}>
                    Fetch Comments
                    </button>
            </div>
        </React.Fragment>

    );
}
