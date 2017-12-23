import React, { Component } from 'react';
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

import Firebase from 'firebase'

class App extends Component {
  constructor(props){
    super(props)
    
    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments:{},
      isLoggedIn:false,
      user:{}
    }

    this.refComments = this.props.base.syncState('comments',{
      context: this,
      state: 'comments'
    })

  }
  postNewComment(comment){
    const comments = {
      ...this.state.comments
    }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments : comments
    })
  }
  auth(provider){
      this.props.auth.signInWithPopup(this.props.providers[provider])
  }
  render() {
    return (
      <div className="container">
        { this.state.isLoggedIn && <NewComment postNewComment={this.postNewComment}/> }
        { !this.state.isLoggedIn &&
          <div className='alert alert-info'>
             <button onClick={()=> this.auth('facebook')}>Entre com o Facebook para comentar</button>
          </div>  
        }
        <Comments comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
