import React from 'react';
import { useImmer } from 'use-immer';
import useSocketEvents, { EVENTS } from 'hooks/useSocketEvents';
import { DefaultContainer } from 'layouts/DefaultContainer';
import { MessagesArea } from './Messages';
import ChatMessageForm from './ChatMessageForm';
import DialogForm from './DialogForm';
import uuid from 'uuid';

const Chat = () => {
  const [messages, setMessages] = useImmer([]);
  const messageWrapperRef = React.useRef(null);
  const [nickname, setNickname] = React.useState('');
  const [userId] = React.useState(uuid());
  const { socket, isSocketReady } = useSocketEvents();

  const handleNicknameSubmit = nickname => setNickname(nickname);
  const handleMessageSend = message => {
    socket.emit(EVENTS.NEW_MESSAGE, { message });
  };
  const scrollIntoMessagesView = () => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight;
    }
  };

  React.useEffect(() => {
    if (!isSocketReady) {
      return;
    }

    socket.on(EVENTS.NEW_MESSAGE, message => {
      setMessages(draft => {
        draft.push(message);
      });
      scrollIntoMessagesView();
    });

    socket.on(EVENTS.CHAT_HISTORY, messages => {
      setMessages(() => messages);
      setTimeout(scrollIntoMessagesView, 50);
    });

    socket.emit(EVENTS.CHAT_HISTORY);
  }, [isSocketReady, socket]);

  React.useEffect(() => {
    if (nickname.length && isSocketReady) {
      socket.emit(EVENTS.JOIN, { nickname, userId });
    }
  }, [isSocketReady, nickname]);

  return (
    <React.Fragment>
      <DefaultContainer>
        <div className="messages-wrapper" ref={messageWrapperRef}>
          <MessagesArea messages={messages} currentUserId={userId} />
        </div>

        {!nickname ? (
          <DialogForm handleSubmit={handleNicknameSubmit} fade={false} open />
        ) : (
          <ChatMessageForm handleSubmit={handleMessageSend} />
        )}
      </DefaultContainer>
    </React.Fragment>
  );
};

export default Chat;
