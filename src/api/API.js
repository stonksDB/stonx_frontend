import Endpoint from "./Endpoint";
import { historyResult, indexesResult, newsResult } from "./mockData";
import singleNewsMock from "./singleNewsMock";

function getNews(ticker) {
  return new Endpoint({
    path: "news",
    responseFormat: newsResult,
    pathParam: { ticker: ticker },
  }).getResponse();
}

function getSingleNews(uuid) {
  return new Endpoint({
    path: "news/single",
    responseFormat: singleNewsMock.singleNewsMock,
    pathParam: { uuid: uuid },
  }).getResponse();
}

function search(query) {
  return new Endpoint({
    path: "search",
    queryParam: { key: query },
    responseFormat: {
      names: [],
      tickers: [
        {
          name: "TESLA INC",
          ticker: "TSLA",
        },
      ],
    },
  }).getResponse();
}

function getCompanyInfo(ticker) {
  return new Endpoint({
    path: "stocks/company/single",
    method: "get",
    pathParam: { ticker: ticker },
    responseFormat: {
      city: "Palo Alto",
      industry_id: 47,
      logo_url: "https://logo.clearbit.com/tesla.com",
      name: "TESLA INC",
      phone: "650-681-5000",
      sector: "Consumer Cyclical",
      state: "CA",
      ticker: "TSLA",
      website: "http://www.tesla.com",
    },
  }).getResponse();
}

function register(data) {
  return new Endpoint({
    path: "auth/register",
    method: "post",
    requestBody: data,
    responseFormat: {
      follows: [0, 1, 2],
      likes: ["TSLA"],
      share_holder_info: {
        share_holder_id: 9,
        country: "England",
        dob: "01-01-1970",
        email: "winston@smith.com",
        first_name: "Winston",
        last_name: "Smith",
      },
    },
  }).getResponse();
}

function login(data) {
  return new Endpoint({
    path: "auth/login",
    method: "post",
    requestBody: data,
    responseFormat: {
      follows: [0, 1, 2],
      likes: ["TSLA"],
      share_holder_info: {
        share_holder_id: 9,
        country: "England",
        dob: "01-01-1970",
        email: "winston@smith.com",
        first_name: "Winston",
        last_name: "Smith",
      },
    },
  }).getResponse();
}

function logout() {
  return new Endpoint({
    path: "auth/logout",
    method: "post",
  }).getResponse();
}

function toggleTickerPreference(ticker, action) {
  let method = "";
  if (action === "add") method = "post";
  else method = "delete";

  return new Endpoint({
    path: "user/like",
    method: method,
    pathParam: { ticker: ticker },
    responseFormat: "",
  }).getResponse();
}

function getMostPerforming() {
  return new Endpoint({
    path: "landpage/most_performing",
    method: "get",
    responseFormat: [
      { ticker: "AAPL", name: "APPLE INC" },
      { ticker: "CDNA", name: "CAREDX INC" },
      { ticker: "BYND", name: "BEYOND MEAT INC" },
      { ticker: "MSFT", name: "MICROSOFT CORP" },
    ],
  }).getResponse();
}

function getHistory(ticker, range) {
  return new Endpoint({
    path: "stocks/history",
    method: "get",
    pathParam: { ticker: ticker },
    queryParam: { period: range, update_analytics: "false" },
    responseFormat: historyResult,
  }).getResponse();
}

function getIndexes() {
  return new Endpoint({
    path: "landpage/indexes",
    method: "get",
    responseFormat: indexesResult,
  }).getResponse();
}

function getLikedTickers() {
  return new Endpoint({
    path: "landpage/liked_tickers",
    method: "get",
    responseFormat: [
      {
        ticker: "TSLA",
      },
      {
        ticker: "MSFT",
      },
    ],
  }).getResponse();
}

function getTickerPrice(ticker) {
  return new Endpoint({
    path: "stocks/price",
    pathParam: { ticker: ticker },
    method: "get",
    responseFormat: {
      ticker: "MSFT",
      regular_market_price: 264.760009765625,
      price_last_update: "2021-06-23T11:11:08-04:00",
      ratio: 0.007630701016358272,
    },
  }).getResponse();
}

export {
  getNews,
  getHistory,
  getSingleNews,
  getCompanyInfo,
  search,
  register,
  login,
  logout,
  toggleTickerPreference,
  getMostPerforming,
  getIndexes,
  getLikedTickers,
  getTickerPrice,
};
