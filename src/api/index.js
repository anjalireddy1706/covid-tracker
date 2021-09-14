import axios from "axios";

const url = "https://disease.sh/v3/covid-19/all";
const url1 = "https://covid19.mathdro.id/api";

export const fetchdata = async () => {
  try {
    const {
      data: { cases, recovered, deaths, updated },
    } = await axios.get(url);

    return {
      cases,
      recovered,
      deaths,
      updated,
    };
  } catch (error) {
    console.log("error1");
  }
};

export const fetchCountryData = async (country) => {
  try {
    const {
      data: { confirmed, recovered, deaths, updated },
    } = await axios.get(url1);

    return {
      confirmed,
      recovered,
      deaths,
      updated,
    };
  } catch (error) {
    console.log("error1");
  }
};

export default fetchdata;

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url1}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log("error2");
  }
};
