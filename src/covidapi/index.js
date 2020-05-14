import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const country_url = 'https://api.covid19api.com/summary';

export const fetchData = async (country) => {
  let covidUrl = url;

  if (country) {
    covidUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(covidUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchCovidData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchAllCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

export const fetchCountriesData = async () => {
  try {
    const { data } = await axios.get(`${country_url}`);
    return data.Countries
  } catch (error) {
    return null;
  }
}