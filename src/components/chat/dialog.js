import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

const Dialog = ({ handleSubmit, open = false }) => {
  const [value, setValue] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(open);

  const onChange = event => {
    const { value } = event.target;
    setValue(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (value.trim().length) {
      handleSubmit(value);
      setIsOpen(false);
    }
  };

  return (
    <React.Fragment>
      <Modal isOpen={isOpen}>
        <ModalHeader>Choose a nickname to start chatting</ModalHeader>
        <ModalBody>
          <InputGroup>
            <Input
              type="text"
              placeholder="Choose a nickname"
              value={value}
              onChange={onChange}
              style={{ borderRadius: 0 }}
            />
            <InputGroupAddon addonType="append">
              <Button
                color="primary"
                onClick={onSubmit}
                disabled={!value.trim().length}
              >
                Start chatting!
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Dialog;
