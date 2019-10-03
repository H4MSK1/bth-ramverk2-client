import React from 'react';
import { formatChatMessageDate } from 'utils';

export const MessagesArea = ({ messages }) =>
  messages.map((message, index) => (
    <MessageItem message={message} key={index} />
  ));

export const MessageItem = ({
  message: { nickname, timestamp, message: text, isStatusMessage = false },
  ...props
}) => (
  <div className="message-container" {...props}>
    <div className={`message-item ${isStatusMessage && 'status-message'}`}>
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
