import React from "react";

class Main extends React.Component {
  state = { data: [] };

  componentDidMount() {
    const URL = "https://restcountries.com/v3.1/all";
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        this.setState({ data: json });
      } catch (error) {
        console.warn(error);
      }
    };

    getData(URL);
  }

  getLanguages = (obj) => {
    let values = [];
    for (const key in obj) {
      values.push(obj[key]);
    }
    return values;
  };

  getCurrencies = (obj) => {
    let keys = [];
    for (const key in obj) {
      keys.push([obj[key].name, obj[key].symbol]);
    }
    return keys;
  };

  render() {
    return (
      <ul>
        {console.log(this.state.data)}
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
                {this.getLanguages(country.languages)}
              </p>
              <p>
                <strong>Population: </strong>
                {country.population}
              </p>
              <strong>Currency: </strong>
              {this.getCurrencies(country.currencies)}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Main;
