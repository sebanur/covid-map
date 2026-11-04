export const mockStatsData = {
  data: {
    data: {
      date: "2023-03-09",
      last_update: "2023-03-10 04:21:03",
      confirmed: 676544789,
      confirmed_diff: 194101,
      deaths: 6881737,
      deaths_diff: 1854,
      recovered: 0,
      recovered_diff: 0,
      active: 669663052,
      active_diff: 192247,
      fatality_rate: 0.0102,
    },
  },
};

export const mapStyles = {
  default: {
    fill: "white",
    stroke: "#9f9fa9",
    strokeWidth: 0.8,
    outline: "none",
    transition: "all 0.3s ease",
  },
  hover: {
    fill: "#DB2777",
    stroke: "#BE185D",
    strokeWidth: 0.1,
    outline: "none",
    cursor: "pointer",
  },
  pressed: {
    fill: "#9D174D",
    outline: "none",
  },
};

export const mockDetailData = {
  name: "Turkey",
  continents: ["Europe", "Asia"],
  capital: "Ankara",
  flag: {
    alt: "The flag of Turkey has a red field bearing a large fly-side facing white crescent and a smaller five-pointed white star placed just outside the crescent opening. The white crescent and star are offset slightly towards the hoist side of center.",
    svg: "https://flags.restcountries.com/v5/svg/tr.svg",
  },
  population: 86092168,
  language: "Turkish",
  currency: "Turkish lira",
  fatality_rate: 0.006,
  confirmed: 17042722,
  active: 16941230,
  deaths: 101492,
};

export const mockRestData = {
  data: {
    data: {
      objects: [
        {
          names: { common: "Turkey" },
          continents: ["Europe", "Asia"],
          capitals: [{ name: "Ankara" }],
          flag: { description: "Turkish Flag", url_svg: "flag.svg" },
          population: 85000000,
          languages: [{ name: "Turkish" }],
          currencies: [{ name: "Turkish Lira" }],
        },
      ],
    },
  },
};
