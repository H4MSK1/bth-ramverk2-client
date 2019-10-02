import axios from 'axios';
import TokenService from './TokenService';

export const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

ApiClient.interceptors.request.use(
  request => {
    const token = TokenService.getAccessToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  error => Promise.reject(error),
);

ApiClient.interceptors.response.use(undefined, async error => {
  const response = error.response;
  const token = TokenService.getAccessToken();
  if (
    token &&
    response &&
    response.status === 401 &&
    error.config &&
    !error.config.__isRetryRequest
  ) {
    // Token has expired and is invalid
    TokenService.removeTokens();
    return window.location.reload();
  }

  return Promise.reject(error);
});

export default ApiClient;
