import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalProps,
  ModalCloseButton,
} from '@chakra-ui/modal';
import React, { FC } from 'react';

interface Props extends ModalProps {
  title?: string;
}

const ModalComponent: FC<Props> = ({ children, title, ...rest }) => {
  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
