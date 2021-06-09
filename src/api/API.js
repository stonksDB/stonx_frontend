import Endpoint from "./Endpoint";

function getNews(ticker) {
  return new Endpoint({
    path: "news",
    responseFormat: [
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/My1vw094pkh4kZnhSEBrQg--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/apVB5hzTFtK0hsWeacDUsA--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/c755466a141ff678e36eb5c5f563a091",
          "width": 615
        },
        "provider": "FX Empire",
        "published_at": "2021-06-07T13:41:09Z",
        "title": "DOGE Price Finds Green as Bitcoin Tide Lifts Crypto Boats",
        "uuid": "7691bc6c-6bd1-314e-9294-ad531fd93833"
      },
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/WwfU7l5m.8CSWlP7tGrXaQ--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/jYyhVfkk8m882fogz_cr3A--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/b857b2a3c4ced05d618e1cd87a694e91",
          "width": 615
        },
        "provider": "FX Empire",
        "published_at": "2021-06-04T15:51:34Z",
        "title": "Why Tesla Stock Rebounds After Yesterday’s Strong Sell-Off",
        "uuid": "941ad7cc-507b-3b5c-ab83-e9e0a4b6cae9"
      },
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/5LBBETdcr2MFXUZV4c0Gfw--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/26pGze4QaQWa7B7Q1Vl.Fw--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/76cd3ab8ce6dfc27081b9a1f34300feb",
          "width": 615
        },
        "provider": "FX Empire",
        "published_at": "2021-06-04T14:43:25Z",
        "title": "Dogecoin Falls in Sympathy With Broader Market Despite Crypto’s Miami Heat",
        "uuid": "72698c23-3899-37d0-ac33-adf90eb54db0"
      },
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/AMrWj8I8HWl8NEGFhbQN5Q--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/uAXneyu5UnarczFcIVrHuQ--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/a3d19e486d8cd1a85ee615c70a5c8f13",
          "width": 615
        },
        "provider": "FX Empire",
        "published_at": "2021-06-04T08:44:03Z",
        "title": "Bitcoin Retreats As Musk Tweets Broken-Heart Emoji",
        "uuid": "c8d618b8-0179-3e0d-afe5-bffb2bf753f2"
      },
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/D6sCo82MnXOiIrT6JcTJVw--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/xEO9WJfYcRxbwu0a_7EXrQ--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/6b04c4dd122baf201256a6d6c05c545f",
          "width": 615
        },
        "provider": "FX Empire",
        "published_at": "2021-06-02T15:16:55Z",
        "title": "Elon Musk at it Again, Tweet Sends Samsung Publishing’s Shares Soaring",
        "uuid": "ae317731-b62d-3dcb-b86f-86eb87fa06fe"
      }
    ],
    pathParam: {ticker: ticker}
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
              id: "1",
              canonicalUrl: {url: "https://finance.yahoo.com/news/why-tesla-stock-fell-lows-152448733.html"},
              title: "Test News",
              provider: {displayName: "Author Name"},
              pubDate: "2021-05-14T13:23:11Z",
              summary: "The stock made an attempt to settle below $550.",
              read: true,
              body: {
                data: {
                  cover: {image: {originalUrl: "https://s.yimg.com/uu/api/res/1.2/H.PSikQvBPYn7e9cHK.vVQ--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/fc838e4d2e3cc14aff8b0a50eae71254"}}
                }
              }
            }
          }
        ]
      }
    },
    pathParam: {uuid: uuid}
  }).getResponse();
}

function search(query) {
  return new Endpoint({
    path: "search",
    queryParam: {key: query},
    responseFormat: ["element1", "element2"]
  }).getResponse();
}

function register(data) {
  return new Endpoint({
    path: "auth/register",
    method: "post",
    requestBody: data
  }).getResponse();
}

function login(data) {
  return new Endpoint({
    path: "auth/login",
    method: "get",
    requestBody: data,
    responseFormat: {
      "follows": [ 0, 1, 2 ],
      "likes": [ 0, 1, 2 ],
      "share_holder_info": {
        "country": "England",
        "dob": "01-01-1970",
        "email": "winston@smith.com",
        "first_name": "Winston",
        "last_name": "Smith",
      }
    }
  }).getResponse();
}

function logout() {
  return new Endpoint({
    path: "auth/logout",
    method: "get",
  }).getResponse();
}

export { getNews, getSingleNews, search, register, login, logout };
