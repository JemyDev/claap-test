import { Center } from '@chakra-ui/layout';
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
      <ModalContent p="16" bg="#272D45">
        {title && (
          <ModalHeader
            p='0'
            mb="8"
          >
            <Center
              as='h3'
              color='#DBE1E6'
              fontSize='2xl'
              lineHeight='5'
              fontWeight='normal'
            >{title}</Center>
          </ModalHeader>
        )}
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
