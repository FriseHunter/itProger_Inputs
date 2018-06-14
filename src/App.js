import React, { Component } from 'react';
import './App.css';


class Input extends Component{
  constructor(props){
    super(props);
    this.hendleSubmit = this.hendleSubmit.bind(this);
    this.hendleChenge = this.hendleChenge.bind(this);

   }
  hendleSubmit(){
    alert(`Привет ${document.getElementById('input_name').value} !`);
  }
  hendleChenge(event){
    console.log(event.target.value);
  }

  render(){
    return(
        <form onSubmit={this.hendleSubmit.bind(this)}>
          <input type="text" name="name" onChange={this.hendleChenge.bind(this)} placeholder="Имя" className="input_name" id="input_name"/>
          <input className="input_button" type="submit"/>
        </form>

    )
  }
}


export default Input;
