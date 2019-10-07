import React from 'react';
import { Form, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import EmojiSelector from './EmojiSelector';

const ChatMessageForm = ({ handleSubmit }) => {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef(null);

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

  const handleSelectedEmoji = emoji => {
    setValue(state => state + emoji);
    inputRef.current && inputRef.current.focus();
  };

  return (
    <Form className="chat-form" onSubmit={onSubmit}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Type your message here"
          value={value}
          onChange={onChange}
          style={{ borderRadius: 0 }}
          innerRef={inputRef}
          maxLength={300}
        />
        <InputGroupAddon addonType="append">
          <EmojiSelector handleClick={handleSelectedEmoji} />
          <Button color="info" type="submit" disabled={!value.trim().length}>
            Send
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

export default ChatMessageForm;
