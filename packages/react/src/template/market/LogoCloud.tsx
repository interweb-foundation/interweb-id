import {
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { handleChangeColorModeValue } from '../../default-component';
import { IconTypeProps, LogoCloudType } from '../../types';

export const SimpleBrand = ({
  name,
  icon
}: {
  name?: string;
  icon?: IconTypeProps;
}) => (
  <Stack
    isInline={true}
    justifyContent="center"
    alignItems="center"
    opacity={0.7}
    h="full"
  >
    <Icon as={icon} w={6} h={6} />
    <Text fontSize={{ base: 'xl', lg: '2xl' }}>{name}</Text>
  </Stack>
);

export const LogoCloud = ({ brands, headline, description }: LogoCloudType) => {
  const { colorMode } = useColorMode();
  return (
    <Stack alignItems="center" gap={{ base: 4, lg: 8 }}>
      <GridItem textAlign="center">
        <Heading mb={2}>{headline}</Heading>
        <Text fontSize={{ base: 'md', lg: 'xl' }}>{description}</Text>
      </GridItem>
      <Grid
        w="full"
        templateColumns={{
          md: 'repeat(2, minmax(10rem, 1fr))',
          lg: 'repeat(3, minmax(10rem, 1fr))'
        }}
        gap={3}
      >
        {brands.map((value: string | ReactNode, i: number) => {
          if (typeof value === 'string')
            return (
              <GridItem
                key={i}
                overflow="hidden"
                boxShadow={handleChangeColorModeValue(
                  colorMode,
                  '0 1px 5px #e8e8e8',
                  '0 2px 5px -2px #7e7e7e'
                )}
                borderRadius="md"
                minH={20}
              >
                <Box
                  w="full"
                  h="full"
                  bgImg={value}
                  bgSize="cover"
                  bgPosition="center center"
                  bgRepeat="no-repeat"
                />
              </GridItem>
            );
          if (typeof value !== 'string')
            return (
              <GridItem
                key={i}
                overflow="hidden"
                bg={handleChangeColorModeValue(
                  colorMode,
                  'primary.50',
                  'primary.500'
                )}
                boxShadow={handleChangeColorModeValue(
                  colorMode,
                  '0 1px 5px #e8e8e8',
                  '0 2px 5px -2px #7e7e7e'
                )}
                borderRadius="md"
                minH={20}
              >
                {value}
              </GridItem>
            );
        })}
      </Grid>
    </Stack>
  );
};
