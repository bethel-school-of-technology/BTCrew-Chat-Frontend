import React, { Component } from "react";
import hero from "./hero.jpg";

 
class Main extends Component {
  render() {
    return (
        <div>

          <h1>Let's Chat</h1>
          <ul className="header">


          </ul>
          <div className="content">
          <img src={hero} alt="web logo"/>
          </div>
        </div>
    );
  }
}
 
export default Main;