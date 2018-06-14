import React,{Component} from 'react';
import './Tarea.css';

class Tarea extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: "type here"
    }
    this.handleText = this.handleText.bind(this);
    // this.helper();
  }
  helper(){
    setInterval(() => {
      console.log(this.state.text);
    }, 2000);
  }
  handleText(event){
this.setState({
  text : event.target.value
})
  }
  render() {
    return(
      <form>
        <textarea
          value={this.state.text}
          onChange={this.handleText}
          >

        </textarea>
      </form>
    )
  }
}

export default Tarea;
