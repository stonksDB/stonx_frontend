import Endpoint from "./Endpoint";

function getNews(ticker) {
  return new Endpoint({
    path: "news",
    responseFormat: [
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/fVlGiklU_fOaGuZ8VpgSWQ--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/H.PSikQvBPYn7e9cHK.vVQ--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/fc838e4d2e3cc14aff8b0a50eae71254",
          "width": 615
        },
        "published_at": "2021-05-19T15:24:48Z",
        "title": "Why Tesla Stock Fell To New Lows?",
        "uuid": "d266988b-0bbd-336f-8be7-865991a10961",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in arcu nisi. Mauris sed nisl turpis. " +
          "Cras porttitor dolor in arcu condimentum, vitae tempor erat auctor. Vestibulum cursus eu tellus a ultricies. " +
          "In vitae dolor tortor. Duis pellentesque erat ex, in venenatis libero elementum id. Phasellus porta, tortor sed " +
          "faucibus porttitor, diam eros tempor sem, a accumsan purus lorem vel augue. Sed tempor vel dolor faucibus efficitur. " +
          "Phasellus hendrerit mi felis, ut tincidunt nunc laoreet eget. Etiam tristique velit scelerisque nisi pulvinar rutrum. " +
          "Aliquam consequat erat eu augue porta, non faucibus mi sollicitudin. Vestibulum nunc augue, porttitor in ante sed, " +
          "tincidunt pulvinar turpis. Nunc a enim faucibus, vehicula elit eget, dictum turpis. Nam at turpis sed justo egestas " +
          "iaculis. Cras pharetra diam ligula, molestie egestas leo rutrum ac. Nam neque turpis, viverra non rhoncus sed, " +
          "aliquet sed orci.",
      },
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/mhy3Yv.odKKvJyduCJ23qg--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/UC2vRmKnq4hXDM1H_f0FrQ--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/dc5a977cf02f4037db9abf7f7ab09113",
          "width": 615
        },
        "published_at": "2021-05-17T08:18:49Z",
        "title": "Ethereum Dives Amid Profit Taking After The Recent Rally",
        "uuid": "2b065c35-84af-314e-8a22-635166a5abbc"
      },
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/GJgyrHYRDWbIV2Zum03YJg--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/SpO3QdoU7b4RnUkWFWuH3w--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/63fea3c6d52353a56e167b061ea84d41",
          "width": 615
        },
        "published_at": "2021-05-14T13:23:11Z",
        "title": "Apple, Tesla, and Bitcoin Are in a Technical ‘Excess Phase Top”",
        "uuid": "a99ce306-bd78-3863-a173-2039728d6d56"
      },
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/fmfvnrS8Amit4f__aLt_wA--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/Q7vxLNoSGjq7r0fE3BdH0g--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/9b406a3dc2aafca2a22ff6b41de6412b",
          "width": 615
        },
        "published_at": "2021-05-13T08:21:43Z",
        "title": "Bitcoin Rebounds Above $50,000 As It Tries To Recover After Tesla’s Shocking Decision",
        "uuid": "4d31a0bc-720d-3b25-9bfc-15467d221503"
      },
      {
        "img": {
          "height": 410,
          "tag": "original",
          "url": "https://s.yimg.com/uu/api/res/1.2/diXUSg.xF_GZv_K_QPf3qA--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/x78sWLIpmPxfVyns2pB55A--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/fa4011ca9116f4012dc0903d57718b96",
          "width": 615
        },
        "published_at": "2021-05-13T07:05:02Z",
        "title": "Bitcoin Loses $8,000 as Tesla Stops Bitcoin Payment",
        "uuid": "a18d30bc-eae7-3156-9d6c-55f1f74ec6e0"
      }
    ],
    pathParam: {ticker: ticker}
  }).getResponse();
}

function getSingleNews(uuid) {
  return new Endpoint({
    path: "news/single",
    responseFormat: {
      uuid: "1",
      title: "Test News",
      provider: "Author Name",
      published_at: "2021-05-14T13:23:11Z",
      read: true,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in arcu nisi. Mauris sed nisl turpis. " +
        "Cras porttitor dolor in arcu condimentum, vitae tempor erat auctor. Vestibulum cursus eu tellus a ultricies. " +
        "In vitae dolor tortor. Duis pellentesque erat ex, in venenatis libero elementum id. Phasellus porta, tortor sed " +
        "faucibus porttitor, diam eros tempor sem, a accumsan purus lorem vel augue. Sed tempor vel dolor faucibus efficitur. " +
        "Phasellus hendrerit mi felis, ut tincidunt nunc laoreet eget. Etiam tristique velit scelerisque nisi pulvinar rutrum. " +
        "Aliquam consequat erat eu augue porta, non faucibus mi sollicitudin. Vestibulum nunc augue, porttitor in ante sed, " +
        "tincidunt pulvinar turpis. Nunc a enim faucibus, vehicula elit eget, dictum turpis. Nam at turpis sed justo egestas " +
        "iaculis. Cras pharetra diam ligula, molestie egestas leo rutrum ac. Nam neque turpis, viverra non rhoncus sed, " +
        "aliquet sed orci.",
      img: {url: "broken-img.jpg"}
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
    requestBody: data
  }).getResponse();
}

export { getNews, getSingleNews, search, register, login };
