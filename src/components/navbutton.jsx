import React, { Component } from "react";

class Navbutton extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.handleClick(this.props.name)}
        className="btn btn-dark m-2"
      >
        {this.props.name}
      </button>
    );
  }
}

export default Navbutton;
