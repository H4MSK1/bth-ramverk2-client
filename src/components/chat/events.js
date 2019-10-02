import React from 'react';
import useSocket from 'use-socket.io-client';
import TokenService from 'api/TokenService';

export const EVENTS = Object.freeze({
  USERS_COUNT: 'users_count',
  NEW_MESSAGE: 'chat',
  SEND_MESSAGE: 'chat',
  CHAT_HISTORY: 'chat_history',
  USER_JOINED: 'user_joined',
  USER_LEFT: 'user_left',
  JOIN: 'join',
});

const useSocketEvents = (
  eventListeners = {},
  emitJoinOnConnect = false,
  options = {},
) => {
  const [socket] = useSocket(process.env.REACT_APP_BACKEND_URL, {
    autoConnect: false,
    query: { token: TokenService.getAccessToken() },
    ...options,
  });

  React.useEffect(() => {
    socket.connect();

    Object.keys(eventListeners).forEach(eventName => {
      const listener = eventListeners[eventName];
      socket.on(eventName, listener);
    });

    emitJoinOnConnect && socket.emit(EVENTS.JOIN, {});

    return () => {
      socket.disconnect();
    };
  }, []);

  return { socket };
};

export default useSocketEvents;
