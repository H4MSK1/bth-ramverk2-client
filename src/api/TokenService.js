/** global: localStorage */

const TokenService = {
  setAccessToken: token => localStorage.setItem('access_token', token),
  getAccessToken: () => localStorage.getItem('access_token'),
  removeTokens: () => localStorage.removeItem('access_token'),
};

export default TokenService;
