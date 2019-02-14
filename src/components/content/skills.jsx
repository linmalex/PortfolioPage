// eslint-disable-next-line
import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className>
        <h1 className="display-4">Skills</h1>
        <div className="row">
          <div className="col-4">
            <h5>Languages</h5>
            <ul>
              <li>C#</li>
              <li>JavaScript</li>
              <li>Microsoft SQL</li>
              <li>HTML/CSS</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="col-4">
            <h5>Frameworks</h5>
            <ul>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>ASP.NET 4 and .NET Core</li>
              <li>Entity Framework</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
