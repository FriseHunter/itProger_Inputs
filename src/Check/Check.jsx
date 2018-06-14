import React, { Component } from 'react';
import './Check.css';


class Check extends Component{
  constructor(props){
    super(props);
      this.state = {
        checKboxGroup:{
          angular: false,
          react: true,
          ember: false,
        }
      }
      this.hendleCheck = this.hendleCheck.bind(this)
      // this.helper();
    }
    helper(event){
      setInterval(() => {
        console.log(this.state.checKboxGroup);
      }, 1000);
    }
    hendleCheck(event){
      // console.log(this.state);
      let obj = Object.assign(this.state.checKboxGroup);

    // for (var i in obj) {
    //     obj[i] = false;
    //   }

      obj[event.target.value] = event.target.checked
      this.setState({checKboxGroup: obj})
      console.log(this.state);
    }
    render() {
      return(
        <form>
          <label>
            Angular:
          <input
            name="angular"
            type="checkbox"
            value="angular"
            checked={this.state.checKboxGroup.angular}
            onChange={this.hendleCheck}
            />
          </label>
          <label>
            React:
          <input
            name="angular"
            type="checkbox"
            value="react"
            checked={this.state.checKboxGroup.react}
            onChange={this.hendleCheck}
            />
          </label>
          <label>
            Ember:
          <input
            name="angular"
            type="checkbox"
            value="ember"
            checked={this.state.checKboxGroup.ember}
            onChange={this.hendleCheck}
            />
          </label>
        </form>
    )
  }
  }
  export default Check;
