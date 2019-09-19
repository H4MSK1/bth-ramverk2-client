import TokenService from './TokenService';

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
