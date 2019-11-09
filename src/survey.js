import React, {Component} from 'react';



  class Survey extends Component{
    answerSubmit = (event) =>{

        let answers = this.state.answers
        if(  event.target.name === "answer1"){
           answers.answer1 = event.target.value
        }
       else if (event.target.name === "answer2") {
          answers.answer2 = event.target.value
      }
      else if ( event.target.name === "answer3") {
            answers.answer3 = event.target.value
      } 
      
      this.setState({answers:answers}, function(){
          console.log(this.state.answers)
      })
             
}
    constructor(props){
        super(props)
            this.state={
                studentName : '',
                answers : {
                    answer1 : '',
                    answer2 : '',
                    answer3 : '',
                    
                },
                isSubmitted : false
            }
            this.answerSubmit = this.answerSubmit.bind(this)
    }
    render(){
        let studentName;
        let questions;

        studentName = <div>
            <form>
                <input type = "text" name="name" ref='name' placeholder="Enter your name" />
                <button >Submit</button>
            </form>    
            </div>
        questions = <div>
            <label>1.Which one do you prefer?</label><br/>
            <input type = 'radio' name = 'answer1' value='Online' onClick={this.answerSubmit}/>Online
            <input type = 'radio' name = 'answer1' value='Ofline' onClick={this.answerSubmit}/>Ofline
            <input type = 'radio' name = 'answer1' value='Self-placed' onClick={this.answerSubmit}/>Selfplaced
            <br />
            <label>2. Are you a?</label><br/>
            <input type = 'radio' name = 'answer2' value = "Student" onClick={this.answerSubmit}/>Student
            <input type = 'radio' name = 'answer2' value = 'Employee' onClick={this.answerSubmit}/>Employee
            <input type = 'radio' name = 'answer2' value = 'Self-Employed' onClick={this.answerSubmit}/>Self-Employed
             <br />
            <label>3.Rate our site?</label><br/>
            <input type= 'radio' name = 'answer3' value = "Good" onClick={this.answerSubmit}/>Good
            <input type = 'radio' name = 'answer3' value = "Average" onClick={this.answerSubmit}/>Average
            <input type = "radio" name = 'answer3'  value = "Bad" onClick={this.answerSubmit}/>Bad

            </div>


        return(
           questions

        );
    }
}

export default Survey