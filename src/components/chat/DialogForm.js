import React from 'react';
import {
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

const DialogForm = ({ handleSubmit, open = false, ...props }) => {
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
    <Modal isOpen={isOpen} {...props} centered>
      <ModalHeader>Choose a nickname to start chatting</ModalHeader>
      <ModalBody>
        <Form onSubmit={onSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Enter a nickname"
              value={value}
              onChange={onChange}
              style={{ borderRadius: 0 }}
            />
            <InputGroupAddon addonType="append">
              <Button
                color="primary"
                type="submit"
                disabled={!value.trim().length}
              >
                Start chatting!
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default DialogForm;
