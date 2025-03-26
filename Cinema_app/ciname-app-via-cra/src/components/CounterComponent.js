// Code for the CounterComponent component
import React, { Component, createElement } from 'react';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.props.setCount((currentCount) => this.props.text.includes("Increment") ? currentCount + 1 : currentCount - 1);
  }

  render() {
    return createElement(
      'button',
      { onClick: this.handleIncrement },
      this.props.text
    );
  }
}
export default CounterComponent;