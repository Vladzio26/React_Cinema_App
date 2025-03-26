// Code for the CounterComponent component
import { Component, createElement } from 'react';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  
  handleIncrement(e) {
    this.props.setCount((currentCount) => e.target.textContent.includes("Increment") ? currentCount + 1 : currentCount - 1);
  }

  render() {
    return createElement('div', null, 
        createElement('h1', null, `Count is ${this.props.count}`), 
        createElement('button',{ onClick: this.handleIncrement }, this.props.text.text1),
        createElement('button',{ onClick: this.handleIncrement }, this.props.text.text2));
  }
}
export default CounterComponent;