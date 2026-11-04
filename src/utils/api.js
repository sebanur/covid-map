import axios from "axios";

export const statsApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_STATS_API_KEY,
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

export const restApi = axios.create({
  baseURL: "https://api.restcountries.com/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REST_API_KEY}`,
  },
});
