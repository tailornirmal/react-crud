import React, { Component } from 'react';

import PostForm from './PostForm';
import AllPost from './AllPost'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-8"></h1>
            <p class="lead">Article CRUD Application Using React & Redux</p>
            <small><strong>Used : </strong>React JS 16 , Bootstrap V 4.1.1 , Redux , React Toastify</small>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <PostForm />
          </div>
          <div class="col-sm-8">
            <AllPost />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
