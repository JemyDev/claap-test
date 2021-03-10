import React, { FC, useContext } from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Code,
  ScaleFade,
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
        px={['20px', '20px', '20px', '0']}
      >
        <Box>
          <Button onClick={onOpen}>Invite teammates</Button>
        </Box>
        {data && (
          <Code
            mt='20px'
            p='20px'
            width={['full', 'full', 'full', 'auto']}
          >
            {JSON.stringify(data)}
          </Code>
        )}
      </Flex>
      <ScaleFade initialScale={0.9} in={!!data}>
        <Alert
          status="success"
          variant="subtle"
          position='absolute'
          width='full'
          bottom='0'
          justifyContent='center'
          alignItems='center'
        >
          <AlertIcon />
          You've successfully added teammates to your workspace!
        </Alert>
      </ScaleFade>
      <TeamMatesModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default TeamMates;
