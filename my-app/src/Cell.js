import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <div
        className="Cell"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Cell;