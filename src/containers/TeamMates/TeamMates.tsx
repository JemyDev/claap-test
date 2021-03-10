import React, { FC, useContext } from 'react';
import {
  Box,
  Button,
  Code,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import TeamMatesModal from './TeamMatesModal/TeamMatesModal';
import TeamMatesContext from 'context/TeamMatesContext';

const TeamMates: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useContext(TeamMatesContext);

  return (
    <>
      <Flex
        justify='center'
        align='center'
        direction='column'
        as='main'
        minH="100vh"
      >
        <Box>
          <Button colorScheme='facebook' onClick={onOpen}>Invite teammates</Button>
        </Box>
        <Code>
          {data && JSON.stringify(data)}
        </Code>
      </Flex>
      <TeamMatesModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default TeamMates;
