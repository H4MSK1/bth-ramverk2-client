import TokenService from './TokenService';
import jwt_decode from 'jwt-decode';
import { client } from './client';

export const RenderOnlyAuth = ({ children }) => onlyAuth(() => children);
export const RenderOnlyGuest = ({ children }) => onlyGuest(() => children);

export const onlyAuth = (next, fallback = null) => {
  if (!TokenService.getAccessToken()) {
    return fallback;
  }
  return next();
};

export const onlyGuest = (next, fallback = null) => {
  if (TokenService.getAccessToken()) {
    return fallback;
  }
  return next();
};

let _currentUser = {};
export const getCurrentUser = () => {
  try {
    if (!Object.keys(_currentUser).length) {
      _currentUser = jwt_decode(TokenService.getAccessToken());
    }

    return _currentUser;
  } catch {
    return {};
  }
};

export const useCurrentUser = (id, resolved, defaultValue = null) =>
  id === getCurrentUser().userId ? resolved : defaultValue;

export const checkTokenExpiration = () =>
  onlyAuth(() => {
    client
      .post('/verifyToken', {
        token: TokenService.getAccessToken(),
      })
      .catch(() => {
        TokenService.removeTokens();
        window.location.reload();
      });
  });
