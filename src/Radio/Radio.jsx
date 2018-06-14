import React, { Component } from 'react';
import './Radio.css';


class Radio extends Component{
  constructor(props){
    super(props);
      this.state = {
        radioGroup:{
          angular: false,
          react: true,
          ember: false,
        }
      }
      this.hendleRadio = this.hendleRadio.bind(this)
      // this.helper();
    }
    helper(event){
      setInterval(() => {
        console.log(this.state.radioGroup);
      }, 1000);
    }
    hendleRadio(event){
      // console.log(this.state);
      let obj = this.state.radioGroup;

    for (var i in obj) {
        obj[i] = false;
      }

      obj[event.target.value] = event.target.checked
      this.setState({radioGroup: obj})
      console.log(this.state);
    }
    render() {
      return(
        <form>
          <label>
            Angular:
          <input
            name="angular"
            type="radio"
            value="angular"
            checked={this.state.radioGroup.angular}
            onChange={this.hendleRadio}
            />
          </label>
          <label>
            React:
          <input
            name="angular"
            type="radio"
            value="react"
            checked={this.state.radioGroup.react}
            onChange={this.hendleRadio}
            />
          </label>
          <label>
            Ember:
          <input
            name="angular"
            type="radio"
            value="ember"
            checked={this.state.radioGroup.ember}
            onChange={this.hendleRadio}
            />
          </label>
        </form>
    )
  }
}
export default Radio;
