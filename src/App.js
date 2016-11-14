import React, { Component } from 'react';
import Header from './components/common/Header';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {tweet:{},speed:0};
    this.childKey='user2';
    this.tweetsArray=[];
  }

  componentDidMount(){
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    const tweetsRef = rootRef.child('tweets');
    speedRef.on('value', snap=>{
      this.setState({speed: snap.val()});
    })

    tweetsRef.child(this.childKey).once('value', snap=>{
      //console.log('snap.val(): ', snap.val());
      this.setState({tweet: snap.val()});
      //console.log('this.state.tweet: ', this.state.tweet);
    })


  }
  
  render() {
    let {tweet, speed} = this.state;
    return (
      <div className="App">
      <Header/>
       {this.props.children}
      </div>
    );
  }
}

export default App;
