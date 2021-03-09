import React, { FC } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import TeamMates from './TeamMates/TeamMates';

export const App: FC = () => (
  <ChakraProvider theme={theme}>
    <TeamMates />
  </ChakraProvider>
)
