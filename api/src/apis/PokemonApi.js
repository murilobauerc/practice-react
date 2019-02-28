import React, { Component } from "react";
import axios from "axios";

export default class PokemonApi extends Component {
  state = { pokemons: [] };

  handlePokemonApi() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      const topTwentyPokemons = response.data.results;
      topTwentyPokemons.map(pokemon => {
        this.setState({
          pokemons: [this.state.pokemons, ...topTwentyPokemons]
        });
      });
    });
  }

  componentDidMount() {
    this.handlePokemonApi();
  }

  render() {
    return (
      <div>
        <p>
          {" "}
          Top twenty pokemons:{" "}
          {this.state.pokemons.map(pokemon => {
            return <span> {pokemon.name} </span>;
          })}
        </p>
      </div>
    );
  }
}
