import React from 'react';
import { useImmer } from 'use-immer';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { DefaultContainer } from 'layouts/DefaultContainer';
import { RenderOnlyAuth, getCurrentUser, useCurrentUser } from 'api/utils';
import useSocketEvents, { EVENTS } from './events';
import { getMonths } from 'utils';

const formatChatMessageDate = date => {
  const monthName = getMonths()[date.getMonth()];

  return `${date
    .getDate()
    .toString()
    .padStart(2, '0')} ${monthName.substr(0, 3)} ${date
    .getHours()
    .toString()
    .padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
};

const composeMessageObj = (message, user = null, isStatusMessage = false) => {
  if (user === null) {
    const currentUser = getCurrentUser();
    user = { name: currentUser.name, id: currentUser.userId };
  }
  return {
    timestamp: Date.now(),
    message,
    user,
    isStatusMessage,
  };
};

const ChatMessageForm = ({ handleSubmit }) => {
  const [value, setValue] = React.useState('');

  const onChange = event => {
    const { value } = event.target;
    setValue(value);
  };

  const onSubmit = event => {
    event.preventDefault();

    if (value.trim().length) {
      handleSubmit(value.trim());
      setValue('');
    }
  };

  return (
    <div className="chat-form">
      <InputGroup>
        <Input
          type="text"
          name="message"
          placeholder="Type your message here"
          value={value}
          onChange={onChange}
          onKeyDown={event => event.keyCode === 13 && onSubmit(event)}
          style={{ borderRadius: 0 }}
        />
        <InputGroupAddon addonType="append">
          <Button color="secondary" onClick={onSubmit}>
            <span style={{ padding: '0 15' }}>Send</span>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

const MessageItem = ({
  message: { user, timestamp, message: text, isStatusMessage = false },
  ...props
}) => (
  <div className="message-container" {...props}>
    <div
      className={`message-item ${useCurrentUser(
        user.id,
        'message-sent',
        'message-received',
      )}`}
    >
      <p>
        {!isStatusMessage &&
          useCurrentUser(
            user.id,
            null,
            <span className="sender">{user.name}</span>,
          )}

        {(isStatusMessage && <i>{text}</i>) || text}
      </p>
      <time title={new Date(timestamp).toUTCString()}>
        {formatChatMessageDate(new Date(timestamp))}
      </time>
    </div>
  </div>
);

const MessagesArea = ({ messages }) =>
  messages.map((message, index) => (
    <MessageItem message={message} key={index} />
  ));

const Chat = () => {
  const [usersCount, setUsersCount] = React.useState(0);
  const [messages, setMessages] = useImmer([]);
  const messageWrapperRef = React.useRef(null);

  const scrollIntoMessagesView = () => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight;
    }
  };
  const scrollIntoMessagesViewWithDelay = (delay = 50) =>
    setTimeout(scrollIntoMessagesView, delay);

  const eventListeners = {
    [EVENTS.USERS_COUNT]: count => setUsersCount(count),
    [EVENTS.NEW_MESSAGE]: message => {
      setMessages(draft => {
        draft.push(message);
      });
      scrollIntoMessagesView();
    },
    [EVENTS.CHAT_HISTORY]: messages => {
      setMessages(() => messages);
      scrollIntoMessagesViewWithDelay();
    },
    [EVENTS.USER_JOINED]: user => {
      setMessages(draft => {
        draft.push(
          composeMessageObj(`${user.name} has joined the chat`, user, true),
        );
      });
      scrollIntoMessagesView();
    },
    [EVENTS.USER_LEFT]: user => {
      setMessages(draft => {
        draft.push(
          composeMessageObj(`${user.name} has left the chat`, user, true),
        );
      });
      scrollIntoMessagesView();
    },
  };

  const { socket } = useSocketEvents(eventListeners, true);

  const handleMessageSend = message => {
    socket.emit(EVENTS.SEND_MESSAGE, { message });
    setMessages(draft => {
      draft.push(composeMessageObj(message));
    });
    scrollIntoMessagesViewWithDelay();
  };

  return (
    <DefaultContainer>
      Users online: {usersCount}
      <div className="messages-wrapper" ref={messageWrapperRef}>
        <MessagesArea messages={messages} />
      </div>
      <RenderOnlyAuth>
        <ChatMessageForm handleSubmit={handleMessageSend} />
      </RenderOnlyAuth>
    </DefaultContainer>
  );
};

export default Chat;
