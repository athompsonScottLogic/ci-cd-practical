import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
  }

  handleIncrementClick() {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <div className="Counter">
        <p className="Counter-Count">You clicked {this.state.count} times</p>
        <button className="Counter-Button Counter-Increment" onClick={this.handleIncrementClick}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;