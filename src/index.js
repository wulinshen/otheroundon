import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './index.css';
import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAHeWH1n3EEgFU0vFbEjCsDNFmW_cWZpLA",
    authDomain: "firstfirebasedb-22947.firebaseapp.com",
    databaseURL: "https://firstfirebasedb-22947.firebaseio.com",
    storageBucket: "firstfirebasedb-22947.appspot.com",
    messagingSenderId: "1078528701398"
  };
  firebase.initializeApp(config);

ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('root')
);