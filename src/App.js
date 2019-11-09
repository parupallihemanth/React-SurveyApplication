import React, {Component} from 'react';
import './App.css';
import Survey from './survey'
import Authentication from './authentication'
class App extends Component{
  render(){
    return(
    <div className = 'App'>   
        
       {/* <Survey /> */}
       <Authentication /> 
    </div>   
    );
  }
}


export default App