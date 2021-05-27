import axios from "axios";

export const ENDPOINTS = {
  SEARCH: "/search",
  NEWS: "/news"
};

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  responseType: "json",
  //headers: {"X-Requested-By": "stonX"},
});
API.interceptors.request.use(function (response) {
  // eslint-disable-next-line
  if (process.env.REACT_APP_MOCK_API==true)
    throw new axios.Cancel("Simulated action");
  else
    return response;
}, function (error) {
  console.error(error);
  return [];
});
API.interceptors.response.use(function (response) {   //TODO: Provide feedback to user
  return response;
}, function (error) {
  console.error(error);
  return [];
});

export default API;