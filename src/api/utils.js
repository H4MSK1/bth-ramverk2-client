import TokenService from './TokenService';
import jwt_decode from 'jwt-decode';

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

    // if (_currentUser.exp < new Date().getTime()) {
    //   TokenService.removeTokens();
    //   return window.location.reload();
    // }

    return _currentUser;
  } catch {
    return {};
  }
};

export const useCurrentUser = (id, resolved, defaultValue = null) =>
  id === getCurrentUser().userId ? resolved : defaultValue;
