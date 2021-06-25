import Endpoint from "./Endpoint";
import { historyResult, indexesResult, newsResult } from "./mockData";

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
    responseFormat: {
      data: {
        contents: [
          {
            content: {
              id: "c8d618b8-0179-3e0d-afe5-bffb2bf753f2",
              canonicalUrl: {
                url: "https://finance.yahoo.com/news/bitcoin-retreats-musk-tweets-broken-084403780.html",
              },
              title: "Bitcoin Retreats As Musk Tweets Broken-Heart Emoji",
              provider: { displayName: "FX Empire" },
              pubDate: "2021-06-04T08:44:03Z",
              summary:
                "Bitcoin failed to get above $40,000 and moved below the $37,000 level.",
              finance: { stockTickers: [{ symbol: "TSLA" }] },
              read: true,
              body: {
                data: {
                  cover: {
                    image: {
                      originalUrl:
                        "https://s.yimg.com/uu/api/res/1.2/uAXneyu5UnarczFcIVrHuQ--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/a3d19e486d8cd1a85ee615c70a5c8f13",
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
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
    path: "stock/history",
    method: "get",
    pathParam: { ticker: ticker, period: range, update_analytics: "false" },
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
  getIndexes
};
