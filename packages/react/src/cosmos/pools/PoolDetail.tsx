import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  useColorMode
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface poolsData {
  id: string;
  token1: {
    name: string;
    img: string;
    amount: number;
    tokenTotalAmount: number;
    percent: number;
  };
  token2: {
    name: string;
    img: string;
    amount: number;
    tokenTotalAmount: number;
    percent: number;
  };
  poolLiquidity: number;
  swapFee: number;
  myLiquidity: number;
  bounded: number;
}

interface unbondingPeriodListData {
  days: string;
  apr: number;
  amount: number;
}

export default function PoolDetail() {
  const { colorMode } = useColorMode();
  const [poolsData, setPoolsData] = useState<poolsData>({
    id: '0',
    token1: { name: '', img: '', amount: 0, tokenTotalAmount: 0, percent: 0 },
    token2: { name: '', img: '', amount: 0, tokenTotalAmount: 0, percent: 0 },
    poolLiquidity: 0,
    swapFee: 0,
    myLiquidity: 0,
    bounded: 0
  });
  const [unbondingPeriodList, setUnbondingPeriodList] = useState<
    unbondingPeriodListData[]
  >([]);
  const tableHeaders = [
    'Unbonding Duration',
    'Current APR',
    'Amount',
    'Action'
  ];

  useEffect(() => {
    // eslint-disable-next-line
    const getShuffledArr = (arr: any[]) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rand]] = [arr[rand], arr[i]];
      }
      return arr;
    };
    // pools data
    const allTokens = OsmosisTokens.map(({ name, imgSrc }) => ({
      name: name,
      img: imgSrc
    }));
    const poolOptionToken1 = getShuffledArr([...allTokens])[0];
    const poolOptionToken2 = getShuffledArr([...allTokens]).filter(
      ({ name }) => name !== poolOptionToken1.name
    )[0];
    const getRandomId = getShuffledArr(
      [...Array(500)].map((_, i) => i + 1)
    ).slice(0, 1)[0];
    const getRandomPoolLiquidity = parseInt(
      getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .toString()
        .replaceAll(',', '')
    );
    const getRandomSwapFee = parseFloat((Math.random() * 11).toFixed(2));
    const getRandomMyLiquidity = parseInt(
      getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .toString()
        .slice(0, 5)
        .replaceAll(',', '')
    );
    const randomAmountValue = parseInt(
      getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .toString()
        .slice(0, 4)
        .replaceAll(',', '')
    );
    const getRandomMyAmount = [...Array(2)].map((_, i) => {
      if (i !== 0 && getRandomMyLiquidity < randomAmountValue)
        return randomAmountValue - getRandomMyLiquidity;
      if (i !== 0 && getRandomMyLiquidity > randomAmountValue)
        return getRandomMyLiquidity - randomAmountValue;
      return randomAmountValue;
    });
    const getRandomPercent = parseInt(
      getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .toString()
        .slice(0, 3)
        .replaceAll(',', '')
    );
    const getRandomTotalAmount = [...Array(2)].map((_) =>
      (
        parseFloat(
          getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
            .toString()
            .replaceAll(',', '')
        ) / 5000
      ).toFixed(2)
    );
    const getDefaultPoolData = {
      id: `${getRandomId}`,
      token1: {
        name: poolOptionToken1.name,
        img: poolOptionToken1.img,
        tokenTotalAmount: parseFloat(getRandomTotalAmount[0]),
        amount: getRandomMyAmount[0],
        percent: getRandomPercent
      },
      token2: {
        name: poolOptionToken2.name,
        img: poolOptionToken2.img,
        tokenTotalAmount: parseFloat(getRandomTotalAmount[1]),
        amount: getRandomMyAmount[1],
        percent: 100 - getRandomPercent
      },
      poolLiquidity: getRandomPoolLiquidity,
      swapFee: getRandomSwapFee,
      myLiquidity: getRandomMyLiquidity,
      bounded: getRandomMyLiquidity
    };
    // unbonding list data
    const daysArr = ['1', '7', '14'];
    const getRandomAPR = getShuffledArr(
      [...Array(3)].map((_) => {
        const randomAPR =
          parseInt(
            getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .slice(0, 7)
              .replaceAll(',', '')
          ) / 100;
        return randomAPR;
      })
    ).sort(function (a, b) {
      return a - b;
    });
    const getUnbondingList = [...Array(3)].map((_, i) => ({
      days: daysArr[i],
      apr: getRandomAPR[i],
      amount: 0
    }));

    setPoolsData(getDefaultPoolData);
    setUnbondingPeriodList(getUnbondingList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Box
        bg={handleChangeColorModeValue(
          colorMode,
          'blackAlpha.50',
          'whiteAlpha.50'
        )}
        p={4}
      >
        <Flex align="center" wrap="wrap" mb={6}>
          <Heading
            as="h2"
            fontWeight="extrabold"
            fontSize="2xl"
            wordBreak="break-word"
            mr={8}
            py={1}
          >
            Pools&nbsp;#{poolsData.id}&nbsp;:&nbsp;{poolsData.token1.name}/
            {poolsData.token2.name}
          </Heading>
          <Flex align="center" wrap="wrap">
            <Button colorScheme="primary" m={2} ml={0} mr={{ md: 4 }}>
              Add/Remove Liquidity
            </Button>
            <Button colorScheme="primary" m={2} ml={0}>
              Swap Tokens
            </Button>
          </Flex>
        </Flex>
        <SimpleGrid
          columns={{ md: 2 }}
          gap={{ base: 2, md: 4 }}
          maxW={{ lg: '50%' }}
        >
          <GridItem>
            <Text
              fontWeight="bold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
            >
              Pool Liquidity
            </Text>
            <Text
              fontSize={{ base: '3xl', sm: '4xl' }}
              fontWeight="extrabold"
              wordBreak="break-word"
            >
              ${poolsData.poolLiquidity.toLocaleString()}
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight="bold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
            >
              My Liquidity
            </Text>
            <Text fontSize={{ base: '3xl', sm: '4xl' }} fontWeight="extrabold">
              ${poolsData.myLiquidity}
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight="bold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
              mb={1}
            >
              My Bounded Amount
            </Text>
            <Text fontSize={{ base: 'lg', sm: '2xl' }} fontWeight="extrabold">
              ${poolsData.bounded}
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight="bold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
              mb={1}
            >
              Swap Fee
            </Text>
            <Text fontSize={{ base: 'lg', sm: '2xl' }} fontWeight="extrabold">
              {poolsData.swapFee}%
            </Text>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box p={4} pt={8}>
        <Flex
          justify={{ md: 'space-between' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box maxW={{ md: 'md', lg: '2xl' }}>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              Liquidity Mining
            </Text>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
              mb={{ base: 4, md: 2 }}
            >
              Bond liquidity to various minimum unbonding period to earn OSMO
              liquidity reward and swap fees
            </Text>
          </Box>
          <Flex flexDirection="column" align={{ md: 'end' }}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
              mb={2}
            >
              Available LP tokens
            </Text>
            <Text fontSize="2xl" fontWeight="bold" align={{ md: 'end' }} mb={2}>
              $0
            </Text>
            <Button colorScheme="primary">Start Earning</Button>
          </Flex>
        </Flex>
      </Box>
      <SimpleGrid columns={{ md: 2, lg: 3 }} gap={8} p={4} pb={12}>
        {unbondingPeriodList.map(({ days, apr }) => {
          return (
            <GridItem
              bg={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.50',
                'whiteAlpha.50'
              )}
              borderRadius="xl"
              py={6}
              px={8}
            >
              <Text fontWeight="bold" fontSize="2xl">
                {days === '1' ? 'a day' : `${days} days`}&nbsp;unbonding
              </Text>
              <Text fontWeight="bold" fontSize="xl" color="orange.300">
                APR {apr}%
              </Text>
            </GridItem>
          );
        })}
      </SimpleGrid>
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          My Boundings
        </Text>
        <TableContainer>
          <Table borderRadius="1rem 1rem 0 0" overflow="hidden">
            <Thead
              bg={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.50',
                'whiteAlpha.50'
              )}
            >
              <Tr>
                {tableHeaders.map((header) => (
                  <Td
                    fontSize="md"
                    fontWeight="semibold"
                    letterSpacing="normal"
                  >
                    {header}
                  </Td>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {unbondingPeriodList.map(({ days, apr, amount }) => {
                return (
                  <Tr>
                    <Td fontWeight="semibold">
                      {days === '1' ? 'a day' : `${days} days`}
                    </Td>
                    <Td fontWeight="semibold">{apr}%</Td>
                    <Td fontWeight="semibold">{amount} GAMM/2</Td>
                    <Td>
                      <Button
                        variant="unstyled"
                        color="orange.300"
                        isDisabled={amount === 0}
                      >
                        Unbonding All
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box p={4} pt={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Pool Catalyst
        </Text>
        <SimpleGrid columns={{ md: 2 }} gap={8}>
          <Box
            borderRadius="xl"
            bg={handleChangeColorModeValue(
              colorMode,
              'blackAlpha.50',
              'whiteAlpha.50'
            )}
            p={6}
          >
            <Flex align="center" mb={4}>
              <Box
                w={20}
                h={20}
                bg="whiteAlpha.900"
                borderRadius="full"
                border="1px solid"
                borderColor="orange.300"
                overflow="hidden"
                p={0.5}
                mr={4}
              >
                <Image src={poolsData.token1.img} />
              </Box>
              <Box>
                <Text fontSize="3xl" fontWeight="extrabold">
                  {poolsData.token1.percent}%
                </Text>
                <Text
                  fontWeight="bold"
                  color={handleChangeColorModeValue(
                    colorMode,
                    'blackAlpha.600',
                    'whiteAlpha.600'
                  )}
                >
                  {poolsData.token1.name}
                </Text>
              </Box>
            </Flex>
            <Text
              fontWeight="bold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
            >
              Total amount
            </Text>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {poolsData.token1.tokenTotalAmount.toLocaleString()}&nbsp;
              {poolsData.token1.name}
            </Text>
            <Text
              fontWeight="bold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
            >
              My amount
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              {poolsData.token1.amount.toLocaleString()}&nbsp;
              {poolsData.token1.name}
            </Text>
          </Box>
          <Box
            borderRadius="xl"
            bg={handleChangeColorModeValue(
              colorMode,
              'blackAlpha.50',
              'whiteAlpha.50'
            )}
            p={6}
          >
            <Flex align="center" mb={4}>
              <Box
                w={20}
                h={20}
                bg="whiteAlpha.900"
                borderRadius="full"
                border="1px solid"
                borderColor="orange.300"
                overflow="hidden"
                p={0.5}
                mr={4}
              >
                <Image src={poolsData.token2.img} />
              </Box>
              <Box>
                <Text fontSize="3xl" fontWeight="extrabold">
                  {poolsData.token2.percent}%
                </Text>
                <Text
                  fontWeight="bold"
                  color={handleChangeColorModeValue(
                    colorMode,
                    'blackAlpha.600',
                    'whiteAlpha.600'
                  )}
                >
                  {poolsData.token2.name}
                </Text>
              </Box>
            </Flex>
            <Text
              fontWeight="bold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
            >
              Total amount
            </Text>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {poolsData.token2.tokenTotalAmount.toLocaleString()}&nbsp;
              {poolsData.token2.name}
            </Text>
            <Text
              fontWeight="bold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.600',
                'whiteAlpha.600'
              )}
            >
              My amount
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              {poolsData.token2.amount.toLocaleString()}&nbsp;
              {poolsData.token2.name}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
