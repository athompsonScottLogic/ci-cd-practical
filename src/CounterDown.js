import React, { Component } from 'react';

class CounterDown extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 99 };
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
  }

  handleIncrementClick() {
    this.setState(state => ({ count: state.count - 1 }));
  }

  render() {
    return (
      <div className="CounterDown">
        <p className="CounterDown-Count">{this.state.count} bottles of beer on the wall, {this.state.count} bottles of beer.</p>
        <button className="CounterDown-Button CounterDown-Increment" onClick={this.handleIncrementClick}>
          Take one down, pass it around...
        </button>
      </div>
    );
  }
}

export default CounterDown;