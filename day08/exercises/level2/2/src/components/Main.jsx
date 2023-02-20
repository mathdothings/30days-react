import React from "react";
import helper from "../helpers/handlers";

class Main extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const URL = "https://restcountries.com/v3.1/all";
    try {
      const response = await fetch(URL);
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.warn(error);
    }
  }

  render() {
    return (
      <ul>
        {/* {console.log(this.state.data)} */}
        {this.state.data.map((country, index) => (
          <li key={index}>
            <div>
              <p className="flag">{country.flag}</p>
              <p>
                <strong>{country.name.common}</strong>
              </p>
              <p>
                <strong>Region: </strong>
                {country.region}
              </p>
              <p>
                <strong>Capital: </strong>
                {country.capital}
              </p>
              <p>
                <strong>Language: </strong>
                {helper.format(helper.handleLanguages(country.languages))}
              </p>
              <p>
                <strong>Population: </strong>
                {country.population}
              </p>
              <strong>Currency: </strong>
              {helper.format(helper.handleCurrencies(country.currencies))}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Main;
