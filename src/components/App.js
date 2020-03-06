import React  from 'react';
import 'components/App.css';
import CommentBox from 'components/comment/commentBox/commentBox';
import CommentList from 'components/comment/commentList/commentList';


function App(props) {
  return (
    <div className="App">

      <h1> this application cretes for testing puposes! </h1>
      <h2>Hi there</h2>

      <CommentBox />

      <CommentList/>
    </div>
  );
}

export default App;
