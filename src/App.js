import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentContainer from './commentContainer';
import CommentForm from './CommentForm';
import CommentBox from './CommentBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CommentContainer comments = {fetch("http://localhost:3000/commentList")}/> */}
        <CommentBox/>
      </div>
    );
  }
}

export default App;
