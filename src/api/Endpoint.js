import Www from "./Www";

export default class Endpoint {
  constructor({path, responseFormat, queryParam={}, pathParam={}, method="get", requestBody=null}) {
    this.path = path;
    this.responseFormat = responseFormat;
    this.queryParam = queryParam;
    this.pathParam = pathParam;
    this.method = method;
    this.requestBody = requestBody;
  }

  getFullUrl() {
    let pathParams = "/" + Object.values(this.pathParam).join("/");
    let queryParams = "?" + new URLSearchParams(this.queryParam).toString();

    if (pathParams.length === 1)
      pathParams = "";
    if (queryParams.length === 1)
      queryParams = "";

    let pathWithoutQuery = this.path + pathParams;

    return `${pathWithoutQuery}${queryParams}`;
  }

  async makeRequest() {
    return Www({
      method: this.method,
      url: this.getFullUrl(),
      data: this.requestBody,
    });
  }

  async getResponse() {
    let response = await this.makeRequest();

    if (response==null || response.data==null)
      return this.responseFormat;
    else
      return response.data;
  }
}
