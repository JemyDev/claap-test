import React, { FC } from 'react';
import {
  Box,
  VStack,
  Grid,
} from '@chakra-ui/react';

const TeamMates: FC = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <div>TeamMates</div>
        </VStack>
      </Grid>
    </Box>
  );
}

export default TeamMates;
