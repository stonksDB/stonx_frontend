import axios from "axios";

const Www = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  validateStatus: function (status) {
    return status < 303;
  }
});

Www.interceptors.request.use(function (request) {
  if (process.env.REACT_APP_MOCK_API==="true")
    throw new axios.Cancel(`Simulated API call to ${request.url}, with body ${JSON.stringify(request.data)}`);
  else
    return request;
}, function (error) {
  return Promise.reject(error);
});

Www.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error instanceof axios.Cancel)
    console.log(error.message);
  else if (error.response && error.response.status>=400 && error.response.status<500)  // Client error: pass it to view component
    return Promise.reject(error);
  else if (error.response)  // Server error: cannot do anything
    console.error(`Error ${error.response.status} on ${error.response.config.url}`, error.toJSON());
  else // No response received: probable internet connection problem
    console.error("Server unreachable");

  return null;
});

export default Www;
