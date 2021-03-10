import React, { FC } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import TeamMates from './TeamMates/TeamMates';
import { TeamMatesContextProvider } from 'context/TeamMatesContext';

export const App: FC = () => (
  <ChakraProvider theme={theme}>
    <TeamMatesContextProvider>
      <TeamMates />
    </TeamMatesContextProvider>
  </ChakraProvider>
)
