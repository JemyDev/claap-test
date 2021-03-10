import React, { FC, useContext } from 'react';
import {
  Box,
  Code,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import TeamMatesModal from './TeamMatesModal/TeamMatesModal';
import TeamMatesContext from 'context/TeamMatesContext';
import Button from 'components/Button/Button';

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
          <Button onClick={onOpen}>Invite teammates</Button>
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
