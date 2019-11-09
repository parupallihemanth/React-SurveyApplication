import React, {Component} from 'react';
import Survey from './survey';
import './App.css';
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
   signup = (event) => {
       let email = this.refs.email.value;
       let password = this.refs.password.value;
       console.log(email, password)
       let auth = firebase.auth()
       const promise = auth.createUserWithEmailAndPassword(email, password)

       promise.then(user =>{
          let  err = "welcome " + user.user.email
           firebase.database().ref('users/'+user.user.uid).set({
               email:user.user.email
           });
           console.log(user)
           this.setState({err:err});
       })
       promise.catch(e =>{
          let err =  e.message
          console.log(err)
          this.setState({err:err})

       })

   }


   login = (event) =>{
       let email = this.refs.email.value;
       let password = this.refs.password.value;
       console.log(email, password)
        let auth =  firebase.auth()
        const promise = auth.signInWithEmailAndPassword(email, password)

        promise.then(user =>{
            let err = "welcome back " + this.refs.email.value
            let lout = document.getElementById('logout');
            lout.classList.remove('hide')
            let sup  = document.getElementById('signup')    
            sup.classList.add('hide')
            let lin  = document.getElementById('login')
            lin.classList.add('hide')
            let gg  = document.getElementById('google')
            gg.classList.add('hide')
            this.setState({err:err})
            
        }
            
        )
        promise.catch(e =>{
            let err = e.message
            console.log(err)
            this.setState({err:err})
        })
   }


   google = (event) =>{
       let provider = new firebase.auth.GoogleAuthProvider()
       let promise = firebase.auth().signInWithPopup(provider)
       promise.then(result =>{
           let user = result.user
           console.log(user)
           firebase.database().ref('users/'+user.uid).set(
               {
                     email : user.email,
                     name  : user.displayName
               }
           )
       }

       )

       promise.catch(e =>{
           let err = e.message
           console.log(err)
           this.setState({err:err})
       })
           
   }

   logout = () =>{
       let promise = firebase.auth().signOut()

       promise.then(() =>{
           let err = "you are successfully logged out"
           let lout = document.getElementById('logout')
           lout.classList.add('hide')
           let sup  = document.getElementById('signup')    
            sup.classList.remove('hide')
            let lin  = document.getElementById('login')
            lin.classList.remove('hide')
            let gg  = document.getElementById('google')
            gg.classList.remove('hide')
           this.setState({err:err})
       }

       )
       promise.catch(e =>{
           let err = e.message
           console.log(err)
           this.setState({err:err})
       })
         }

  constructor(props){
      super(props)
          this.state={
              err : ''
          
      };
      this.login = this.login.bind(this)
      this.signup = this.signup.bind(this)
      this.logout = this.logout.bind(this)
  }
    render(){
        
        return(
          <div className="credentials">
              <input id="email"  ref='email' type = "email"  placeholder = "Enter your email" /><br />
              <input id="pass" ref="password" type = "password"   placeholder = "Enter your password" /><br />
              <p>{this.state.err}</p>
              
              <button id="login" onClick={this.login}>Login</button>{' '}
              <button id="signup" onClick={this.signup}>Signup</button>{' '}
              <button id="logout" className="hide" onClick={this.logout}>Logout</button>{' '}<br /><br />
              <button id="google"  onClick={this.google}>Sign in with google</button>
              </div>
        );
    }
}


export default Authentication