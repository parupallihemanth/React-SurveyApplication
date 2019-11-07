import React, {Component} from 'react';
let firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyAaVcm6amTX4ruUt5InUNc1NUGLUOTFem4",
    authDomain: "surveyapplication-77f6d.firebaseapp.com",
    databaseURL: "https://surveyapplication-77f6d.firebaseio.com",
    projectId: "surveyapplication-77f6d",
    storageBucket: "surveyapplication-77f6d.appspot.com",
    messagingSenderId: "367402494652",
    appId: "1:367402494652:web:a13372335948ee93bf7eb9",
    measurementId: "G-J7V725YC14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




class Authentication extends Component{
    render(){
        return(
          <h3> I am from authentication component</h3>
        );
    }
}


export default Authentication