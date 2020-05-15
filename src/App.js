import React from 'react';
import './styles.css'
import Logo from './images/logo.png'
import Cards from './components/cards/cards'
import Chart from './components/charts/charts'
import Country from './components/countrypicker/country'
import { fetchData, fetchCountriesData } from './covidapi'
import Prevention from './components/prevention/prevention'
import datas from './continent-data/continent-country'
import { Grid, Divider } from '@material-ui/core';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    continentData: []
  }

  /**
   * helper function for creating data of pie chart.
   */
  filterData = (data) => {

    if (data) {
      const result = {};
      const { countryData } = datas
      data.map(country => {
        if (result[countryData[country.CountryCode]]) {
          result[countryData[country.CountryCode]] = (country.TotalConfirmed - country.TotalRecovered - country.TotalDeaths) + result[countryData[country.CountryCode]];
        }
        else {
          result[countryData[country.CountryCode]] = country.TotalConfirmed - country.TotalRecovered - country.TotalDeaths
        }

      })
      return result;
    }

  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const fetchedData = await fetchData();
    const fetchedCountriesData = await fetchCountriesData();
    const data = this.filterData(fetchedCountriesData);
    this.setState({ data: fetchedData, continentData: data });

  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  render() {
    const { data, country, continentData, isLoading, isError } = this.state
    return (
      <div className="app">
        <Grid justify="center">
          <img src={Logo} alt="logo" style={{ maxWidth: 340, padding: 20 }} />
        </Grid>
        <Divider />
        <Cards data={data} />

        <Country handleCountryChange={this.handleCountryChange} />
        <Divider />
        <Chart data={data} country={country} continentData={continentData} isLoading={isLoading} isError={isError} />
        <Divider />
        <Prevention />

      </div>

    )
  }

}

export default App
