import React from 'react';
import { formatChatMessageDate } from 'utils';

export const MessagesArea = ({ messages, ...props }) =>
  messages.map((message, index) => (
    <MessageItem message={message} key={index} {...props} />
  ));

export const MessageItem = ({
  message: {
    user: { nickname, userId },
    timestamp,
    message: text,
    isStatusMessage = false,
  },
  currentUserId,
  ...props
}) => (
  <div className="message-container" {...props}>
    <div
      className={`message-item ${(isStatusMessage && 'status-message') ||
        (userId === currentUserId && 'align-self-end')}`}
    >
      <p>
        {!isStatusMessage && <span className="sender">{nickname}</span>}
        {text}
      </p>
      <time title={new Date(timestamp).toUTCString()}>
        {formatChatMessageDate(new Date(timestamp))}
      </time>
    </div>
  </div>
);
