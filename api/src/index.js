import React, { Component } from "react";
import ReactDOM from "react-dom";
import CountriesApi from "./apis/CountriesApi";
import PokemonApi from "./apis/PokemonApi";

export default class App extends Component {
  render() {
    return (
      <div>
        {" "}
        App is working!
        {/* <CountriesApi /> */}
        <PokemonApi />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
