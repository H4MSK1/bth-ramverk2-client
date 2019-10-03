import React from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';

const emojis = '😁|😂|🤣|😃|😄|😉|😊|😋|😎|🙃|🤔|😶|🤬|👿|👹|👺|💀|👻|👽|🤖|💩|👨‍💻|👍|👎|👀|🐮|🐷|🐽|🐸|🐵|🍉|🍆|🌭|🍔|👅|👃'.split(
  '|',
);

const EmojiSelector = ({ handleClick }) => {
  const [defaultEmoji] = React.useState(
    emojis[~~(Math.random() * emojis.length)],
  );
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const togglePopover = () => setIsPopoverOpen(state => !state);

  const onClick = emote => () => {
    handleClick(emote);
    togglePopover();
  };

  return (
    <React.Fragment>
      <Button color="danger" id="EmotePopover" onClick={togglePopover}>
        {defaultEmoji}
      </Button>
      <Popover
        target="EmotePopover"
        trigger="legacy"
        placement="top"
        isOpen={isPopoverOpen}
        toggle={togglePopover}
      >
        <PopoverBody>
          {emojis.map((emoji, index) => (
            <span key={index} onClick={onClick(emoji)} className="emote-item">
              {emoji}
            </span>
          ))}
        </PopoverBody>
      </Popover>
    </React.Fragment>
  );
};

export default EmojiSelector;
