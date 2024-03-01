import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { TiArrowDown, TiArrowUp } from 'react-icons/ti';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface assetsDataType {
  img: string;
  name: string;
  assetValue: number;
  equalUSD: number;
}

interface tokensType {
  imgSrc: string;
  name: string;
}

export default function IbcList({ smallIcon }: { smallIcon: boolean }) {
  const { colorMode } = useColorMode();
  const [assetsData, setAssetsData] = useState<assetsDataType[]>([]);
  const [tokensData, setTokensData] = useState<tokensType[]>([]);

  useEffect(() => {
    // eslint-disable-next-line
    const getShuffledArr = (arr: any[]) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rand]] = [arr[rand], arr[i]];
      }
      return arr;
    };
    const allTokens = OsmosisTokens.map(({ name, imgSrc }) => ({
      name: name,
      imgSrc: imgSrc
    }));
    const getAssetTokensData = getShuffledArr([...allTokens]).slice(
      0,
      Math.floor(Math.random() * (6 - 1) + 1)
    );
    const getAllTokensData = allTokens.filter(
      ({ name }) =>
        !getAssetTokensData
          .map(({ name: assetName }) => assetName)
          .includes(name)
    );
    const getRandomAsset = [...Array(getAssetTokensData.length)]
      .fill(undefined)
      .map((_) => {
        const randomValue =
          parseFloat(
            getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .replaceAll(',', '')
          ) / 1000000000;

        return parseFloat(randomValue.toFixed(6));
      });
    const getRandomUSD = [...Array(getAssetTokensData.length)]
      .fill(undefined)
      .map((_) => {
        const randomValue =
          parseFloat(
            getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .replaceAll(',', '')
          ) / 10000000000;

        return parseFloat(randomValue.toFixed(2));
      });
    const getAssetsDataArr = [...Array(getAssetTokensData.length)]
      .fill(undefined)
      .map((_, i) => ({
        img: getAssetTokensData[i].imgSrc,
        name: getAssetTokensData[i].name,
        assetValue: getRandomAsset[i],
        equalUSD: getRandomUSD[i]
      }));
    setAssetsData(getAssetsDataArr);
    setTokensData(getAllTokensData);
  }, []);

  return (
    <Container p={4}>
      <Heading as="h2" fontSize="2xl" mb={4}>
        IBC Transfer
      </Heading>
      <Text
        fontWeight="semibold"
        color={handleChangeColorModeValue(
          colorMode,
          'blackAlpha.700',
          'whiteAlpha.700'
        )}
        mb={8}
      >
        Easily and quickly initiate payment across IBC.
      </Text>
      <Text
        fontWeight="semibold"
        color={handleChangeColorModeValue(
          colorMode,
          'blackAlpha.900',
          'whiteAlpha.900'
        )}
        mb={4}
      >
        My Assets
      </Text>
      <Stack spacing={4} mb={10}>
        {assetsData.map(({ name, img, assetValue, equalUSD }, i) => {
          const color = handleChangeColorModeValue(
            colorMode,
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 255, 255, 0.25)'
          );
          return (
            <Grid
              key={i}
              templateColumns={{ base: '1fr 1fr', md: '1fr auto auto' }}
              alignItems="center"
              border="1px solid"
              borderColor={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.500',
                'whiteAlpha.500'
              )}
              borderRadius="2xl"
              boxShadow={`0 1px 3px 0 ${color}`}
              p={4}
              gap={{ base: 6, md: 3 }}
            >
              <GridItem
                colSpan={{ base: 2, md: 'auto' }}
                display="flex"
                alignItems="center"
              >
                <Box
                  w={smallIcon ? 8 : 12}
                  h={smallIcon ? 8 : 12}
                  maxW={smallIcon ? 8 : 12}
                  minW={smallIcon ? 8 : 12}
                  maxH={smallIcon ? 8 : 12}
                  minH={smallIcon ? 8 : 12}
                  borderRadius="full"
                  border="1px solid"
                  borderColor={handleChangeColorModeValue(
                    colorMode,
                    'blackAlpha.50',
                    'whiteAlpha.50'
                  )}
                  bg="whiteAlpha.900"
                  overflow="hidden"
                  mr={3}
                >
                  <Image src={img} />
                </Box>
                <Box flex={1}>
                  <Text fontWeight="semibold">
                    {assetValue}&nbsp;{name}
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color={handleChangeColorModeValue(
                      colorMode,
                      'blackAlpha.600',
                      'whiteAlpha.600'
                    )}
                  >
                    ${equalUSD}
                  </Text>
                </Box>
              </GridItem>
              <Button
                display="inline-flex"
                variant="unstyled"
                color={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.600',
                  'whiteAlpha.600'
                )}
                _focus={{ outline: 'none' }}
                p={2}
              >
                <Text fontWeight="semibold">Withdraw</Text>
                <Icon as={TiArrowUp} w={6} h={6} />
              </Button>
              <Button
                display="inline-flex"
                variant="unstyled"
                color={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.600',
                  'whiteAlpha.600'
                )}
                _focus={{ outline: 'none' }}
                p={2}
              >
                <Text fontWeight="semibold">Deposit</Text>
                <Icon as={TiArrowDown} w={6} h={6} />
              </Button>
            </Grid>
          );
        })}
      </Stack>
      <Text
        fontWeight="semibold"
        color={handleChangeColorModeValue(
          colorMode,
          'blackAlpha.900',
          'whiteAlpha.900'
        )}
        mb={4}
      >
        Other Tokens
      </Text>
      <Stack spacing={4}>
        {tokensData.map(({ name, imgSrc }) => {
          return (
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              justify={{ md: 'space-between' }}
              align={{ base: 'start', md: 'center' }}
              bg={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.50',
                'whiteAlpha.50'
              )}
              borderRadius="2xl"
              p={4}
            >
              <Flex align="center">
                <Box
                  w={smallIcon ? 8 : 12}
                  h={smallIcon ? 8 : 12}
                  maxW={smallIcon ? 8 : 12}
                  minW={smallIcon ? 8 : 12}
                  maxH={smallIcon ? 8 : 12}
                  minH={smallIcon ? 8 : 12}
                  borderRadius="full"
                  border="1px solid"
                  borderColor={handleChangeColorModeValue(
                    colorMode,
                    'blackAlpha.50',
                    'whiteAlpha.50'
                  )}
                  bg="whiteAlpha.900"
                  overflow="hidden"
                  mr={3}
                >
                  <Image src={imgSrc} />
                </Box>
                <Text fontWeight="semibold">{name}</Text>
              </Flex>
              <Button
                w={{ base: 'full', md: 'initial' }}
                display="inline-flex"
                variant="unstyled"
                color={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.600',
                  'whiteAlpha.600'
                )}
                _focus={{ outline: 'none' }}
                p={2}
              >
                <Text fontWeight="semibold">Deposit</Text>
                <Icon as={TiArrowDown} w={6} h={6} />
              </Button>
            </Flex>
          );
        })}
      </Stack>
    </Container>
  );
}
