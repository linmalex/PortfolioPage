import React, { Component } from "react";
import Navbutton from "./navbutton.jsx";
import logo from "../images/lindsayalexander-logo-black.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="my-logo-container col-4">
            <img className="my-logo img-fluid" src={logo} alt="lindsay-logo" />
          </div>
          <div>
            <Navbutton handleClick={this.props.handleClick} name="about" />
            <Navbutton handleClick={this.props.handleClick} name="portfolio" />
            <Navbutton handleClick={this.props.handleClick} name="skills" />
            <Navbutton handleClick={this.props.handleClick} name="contact" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
