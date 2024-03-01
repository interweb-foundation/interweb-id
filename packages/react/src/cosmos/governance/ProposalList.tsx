import {
  Box,
  Container,
  Heading,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

export default function () {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>propsalList</Heading>
        </Stack>
      </Container>
    </Box>
  );
}
