import React, { Component } from "react";
import axios from "axios";

export default class CountriesApi extends Component {
  state = { countries: [] };

  handleCountriesApi() {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      const firstTenCountries = response.data.slice(1, 32);
      const countriesToBeRendered = [];
      firstTenCountries.map(country => {
        countriesToBeRendered.push(country);
        this.setState({
          countries: countriesToBeRendered
        });
      });
    });
  }

  componentDidMount() {
    this.handleCountriesApi();
  }

  render() {
    return (
      <div>
        {this.state.countries.map(country => {
          return <p> {country.name} </p>;
        })}
      </div>
    );
  }
}
