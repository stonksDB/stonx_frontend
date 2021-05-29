import Endpoint from "./Endpoint";

function getNews(ticker) {
  return new Endpoint({
    path: "news",
    responseFormat: [{
      uuid: "1",
      title: "Test News",
      provider: "Author Name",
      published_at: "2021-05-14T13:23:11Z",
      img: {url: "broken-img.jpg"}
    }],
    pathParam: {ticker: ticker}
  }).getResponse();
}

function getSingleNews(uuid) {
  return new Endpoint({
    path: "news/single",
    responseFormat: [{
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
    }],
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
