import axios from "axios";
import * as rax from 'retry-axios';

const Www = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  withCredentials: true,
  headers: {"X-Requested-By": "stonX"},
  validateStatus: function (status) {
    return status < 303; // Resolve only if the status code is less than 303
  },
  raxConfig: {
    retry: 2,
    noResponseRetries: 2,
    retryDelay: 100,
    backoffType: "linear",
    onRetryAttempt: err => {
      const cfg = rax.getConfig(err);
      console.warn(`Retry attempt #${cfg.currentRetryAttempt}`);
    }
  }
});
Www.defaults.raxConfig = {...Www.defaults.raxConfig, instance: Www};
rax.attach(Www);

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
  else if (error.response)  // Server error: cannot do anything (already retried three times)
    console.error(`Error ${error.response.status} on ${error.response.config.url}`, error.toJSON());
  else // No response received: probable internet connection problem
    console.error("Server unreachable");

  return null;
});

export default Www;
