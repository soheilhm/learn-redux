import React, { Component } from 'react';

class Soheil extends Component {
  constructor(props) {
    super(props);
    this.state = {clickCount: 0};
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({clickCount: this.state.clickCount+1});
  }

  render() {
    return (
      <div>
        <h1>Hello my name is Soheil</h1>
        <button onClick={this._handleClick}>
          TEST
        </button>
        <p>I have been clicked {this.state.clickCount} times!</p>
      </div>
    );
  }
}

export default Soheil;
