import React, { FC } from 'react';
import {
  Box,
  Button,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import TeamMatesModal from './TeamMatesModal/TeamMatesModal';

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
      <TeamMatesModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default TeamMates;
