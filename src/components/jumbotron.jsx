import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="lead">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
