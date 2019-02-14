import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Jumbotron from "./components/jumbotron";
import About from "./components/content/about.jsx";
import Portfolio from "./components/content/portfolio.jsx";
import Skills from "./components/content/skills.jsx";
import Contact from "./components/content/contact.jsx";

class App extends Component {
  state = {
    contentArray: {
      about: <About />,
      portfolio: <Portfolio />,
      skills: <Skills />,
      contact: <Contact />
    },
    activeContent: <About />
  };

  handleClick = name => {
    var activeContent = this.state.contentArray[name];
    this.setState({ activeContent });
  };

  render() {
    return (
      <div className="container-fluid full-height">
        <Navbar handleClick={this.handleClick} />
        <Jumbotron content={this.state.activeContent} />
      </div>
    );
  }
}

export default App;
