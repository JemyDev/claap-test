import React, { FC } from 'react';
import {
  Box,
  Button,
  Flex,
  useDisclosure,
  ModalBody,
  Text,
} from '@chakra-ui/react';
import Modal from 'components/Modal/Modal';

const TeamMates: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify='center'
        align='center'
        as='main'
        minH="100vh"
      >
        <Box>
          <Button colorScheme='facebook' onClick={onOpen}>Invite teammates</Button>
        </Box>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title='Invite members'
        isCentered
      >
        <ModalBody>
          <Text>Email invite</Text>
          <Text>Send members as email invitation to join this workspace</Text>
        </ModalBody>
      </Modal>
    </>
  );
}

export default TeamMates;
