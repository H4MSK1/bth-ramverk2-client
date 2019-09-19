import axios from 'axios';
import TokenService from './TokenService';

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

ApiClient.interceptors.request.use(request => {
  const token = TokenService.getAccessToken();
  if (token) {
    request.headers.Authorization = token;
  }

  return request;
});

export default ApiClient;
