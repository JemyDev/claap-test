import React, { FC } from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import TeamMates from './TeamMates/TeamMates';
import { TeamMatesContextProvider } from 'context/TeamMatesContext';
import theme from 'theme/theme';

export const App: FC = () => (
  <ChakraProvider theme={theme}>
    <TeamMatesContextProvider>
      <TeamMates />
    </TeamMatesContextProvider>
  </ChakraProvider>
)
