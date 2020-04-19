import React, { useRef, useEffect } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { sendComment, fetchComments } from 'store/actions';
import requireAuth from '../../hoc/requireAuth';
import { withRouter } from 'react-router-dom';

function CommentBox(props) {

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


        props.history.push('/');
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
                className='container commentBox'
                onKeyPress={enterPressedHandler}>
                <div className='form-group'>
                    <label for='comment'>Comment Text</label>
                    <textarea
                        id='comment'
                        className='commentInp form-control'
                        value={comment}
                        type='text'
                        onChange={(e) => setComment(e.target.value)}
                        rows={5}
                        autoFocus
                        ref={textFoucus} />
                    <small className='text-muted'>
                        Write Youre Valueble Comment Please
                    </small>
                </div>
                <div className='form-group'>
                    <button
                        className='btn-block btn btn-primary btn-outline-lg'
                        type='submit'
                    >
                        send
                    </button>
                </div>
            </form>

            <div className='commentBox container' >
                <button
                    className='btn-block fetch-btn btn btn-lg btn-outline btn-secondary'
                    onClick={fetchCommentsHandler}>
                    Fetch Comments
                </button>
            </div>
        </React.Fragment>

    );
}
export default requireAuth(withRouter(CommentBox)); 