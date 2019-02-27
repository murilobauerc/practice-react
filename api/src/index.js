import React, { Component } from "react";
import ReactDOM from "react-dom";
import CountriesApi from "./components/CountriesApi";

export default class App extends Component {
  render() {
    return (
      <div>
        {" "}
        App is working!
        <CountriesApi />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
