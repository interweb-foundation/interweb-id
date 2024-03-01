import {
  Box,
  Container,
  Heading,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import React from 'react';

export default function () {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>showCurrentVotesPie</Heading>
          <CircularProgress value={80} />
          <CircularProgress value={40} color="green.400">
            <CircularProgressLabel>40%</CircularProgressLabel>
          </CircularProgress>
        </Stack>
      </Container>
    </Box>
  );
}
