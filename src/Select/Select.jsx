import React,{Component} from 'react';
import './Select.css';

class Select extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedValue : "angular"
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.helper();
  }
  helper(){
    setInterval(() => {
      console.log(this.state.selectedValue);
    }, 2000);
  }
  handleSubmit(event){
    alert(`Отправленно значение: ${this.state.selectedValue} !`)
  }
  handleSelect(event){
    this.setState({
      selectedValue : event.target.value
    })
  }
  render() {
    return(
      <form>
        <select
          value={this.state.selectedValue}
          onChange={this.handleSelect}
          >
          <option value="Angular">Angular</option>
          <option value="React">React</option>
          <option value="Embed">Embed</option>
        </select>
        <input type="button" value="submit" onClick={this.handleSubmit}></input>
      </form>
    )
  }
}

export default Select;
