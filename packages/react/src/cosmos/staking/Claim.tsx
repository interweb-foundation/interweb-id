import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Link,
  Text,
  useColorMode
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface delegationTokenType {
  name: string;
  allReward: string;
  staking: string;
}

interface listsDataType {
  name: string;
  image: string;
  amountStaked: string;
  pendingReward: string;
  token: string;
}

export default function Claim() {
  const { colorMode } = useColorMode();
  const [allRewardData, setAllRewardData] = useState<delegationTokenType>({
    name: '',
    allReward: '',
    staking: ''
  });
  const [listsData, setListsData] = useState<listsDataType[]>([
    {
      name: '',
      image: '',
      amountStaked: '',
      pendingReward: '',
      token: ''
    }
  ]);
  const listTitle = ['Name', 'Amount Staked', 'Pending Reward', ''];

  useEffect(() => {
    // eslint-disable-next-line
    const getShuffledArr = (arr: any[]) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rand]] = [arr[rand], arr[i]];
      }
      return arr;
    };
    const randGenerator = (n: number, min: number, max: number) => {
      const setArr = [];
      let calcVal = 0;
      for (let i = 0; i < n; i++) {
        const calcMax = max - calcVal;
        const randomNumber = Math.random() * (calcMax - min) + min;
        setArr.push(randomNumber.toFixed(6));
        calcVal += randomNumber;
      }
      setArr.push((max - calcVal).toFixed(6));

      return setArr;
    };
    const allTokens = OsmosisTokens.map(({ name }) => ({
      name: name
    }));
    const getToken = getShuffledArr([...allTokens])[0].name;
    const allReward = (
      parseFloat(
        getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
          .toString()
          .replaceAll(',', '')
      ) / 1000000000
    ).toFixed(6);
    const allStaking = (
      parseFloat(
        getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
          .toString()
          .replaceAll(',', '')
      ) / 100000000
    ).toFixed(3);
    const groupsName = ['CATMOS', 'OmniFlix NetWork', 'Citadel.one'];
    const groupsImage = [
      'https://imgflip.com/s/meme/Smiling-Cat.jpg',
      'https://imgflip.com/s/meme/Doge.jpg',
      'https://i.imgflip.com/2pkdw4.jpg'
    ];
    const getStakedArr = randGenerator(2, 0.000001, parseFloat(allStaking));
    const getPendingRewardArr = randGenerator(
      2,
      0.000001,
      parseFloat(allReward)
    );
    const getListsData = [...Array(3)].fill(undefined).map((_, i) => {
      return {
        name: groupsName[i],
        image: groupsImage[i],
        amountStaked: getStakedArr[i],
        pendingReward: getPendingRewardArr[i],
        token: getToken
      };
    });

    setAllRewardData({
      name: getToken,
      allReward: allReward,
      staking: allStaking
    });
    setListsData(getListsData);
  }, []);

  return (
    <Box p={4}>
      <Box py={6}>
        <Button
          h="fit-content"
          whiteSpace="break-spaces"
          colorScheme="primary"
          boxShadow="md"
          py={3}
        >
          Claim&nbsp;Reward:&nbsp;{allRewardData.allReward}&ensp;
          {allRewardData.name}
        </Button>
      </Box>
      <Box
        bg={handleChangeColorModeValue(colorMode, 'gray.100', 'gray.600')}
        borderRadius="xl"
        boxShadow="sm"
        overflow="hidden"
      >
        <Flex
          position="relative"
          zIndex={5}
          direction={{ base: 'column', md: 'row' }}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
          boxShadow={handleChangeColorModeValue(
            colorMode,
            '0 2px 6px -3px lightgray',
            '0 2px 3px -3px lightgray'
          )}
          p={4}
        >
          <Box py={2}>
            <Text fontSize="lg" fontWeight="bold">
              {allRewardData.name}&nbsp;Staking
            </Text>
            <Text fontSize="lg">
              Total&nbsp;Staked:&nbsp;{allRewardData.staking}&ensp;
              {allRewardData.name}
            </Text>
          </Box>
          <Button
            h="fit-content"
            whiteSpace="break-spaces"
            colorScheme="primary"
            boxShadow="md"
            py={3}
            my={2}
          >
            Claim&nbsp;Reward:&nbsp;{allRewardData.allReward}&ensp;
            {allRewardData.name}
          </Button>
        </Flex>
        <Grid
          display={{ base: 'none', md: 'grid' }}
          templateColumns={{
            md: '3fr repeat(2, 2fr) 1fr'
          }}
          bg={handleChangeColorModeValue(colorMode, 'gray.50', 'gray.700')}
          color={handleChangeColorModeValue(
            colorMode,
            'blackAlpha.600',
            'whiteAlpha.600'
          )}
          fontWeight="semibold"
          boxShadow="sm"
        >
          {listTitle.map((title, i) => {
            return (
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent={i === 0 ? 'start' : 'center'}
                p={4}
              >
                {title}
              </GridItem>
            );
          })}
        </Grid>
        {listsData.map(
          ({ name, image, amountStaked, pendingReward, token }) => {
            return (
              <Grid
                templateColumns={{
                  md: '3fr 2fr 2fr 1fr'
                }}
                color={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.700',
                  'whiteAlpha.700'
                )}
                borderBottom="1px solid"
                borderBottomColor={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.100',
                  'whiteAlpha.300'
                )}
                _hover={{
                  bg: handleChangeColorModeValue(
                    colorMode,
                    'primary.50',
                    'primary.900'
                  ),
                  color: handleChangeColorModeValue(colorMode, 'black', 'white')
                }}
              >
                <GridItem
                  display="flex"
                  justifyContent={{ base: 'center', md: 'start' }}
                  alignItems="center"
                  p={4}
                  pb={{ base: 2, md: 4 }}
                >
                  <Box
                    borderRadius="full"
                    w={{ base: 12, md: 14 }}
                    h={{ base: 12, md: 14 }}
                    minW={{ base: 12, md: 14 }}
                    minH={{ base: 12, md: 14 }}
                    maxW={{ base: 12, md: 14 }}
                    maxH={{ base: 12, md: 14 }}
                    overflow="hidden"
                    mr={{ base: 2, md: 4 }}
                  >
                    <Image src={image} />
                  </Box>
                  <Text fontSize="md" fontWeight="semibold" color="inherit">
                    {name}
                  </Text>
                </GridItem>
                <GridItem
                  display="flex"
                  flexDirection={{ base: 'column', md: 'row' }}
                  justifyContent="center"
                  alignItems="center"
                  fontSize="md"
                  fontWeight="medium"
                  color="inherit"
                  px={4}
                  py={{ base: 1.5, md: 4 }}
                >
                  <Text
                    display={{ md: 'none' }}
                    fontSize="sm"
                    fontWeight="normal"
                    color={handleChangeColorModeValue(
                      colorMode,
                      'blackAlpha.600',
                      'whiteAlpha.600'
                    )}
                    mr={1}
                  >
                    Amount Staked
                  </Text>
                  {amountStaked}&nbsp;{token}
                </GridItem>
                <GridItem
                  display="flex"
                  flexDirection={{ base: 'column', md: 'row' }}
                  alignItems="center"
                  justifyContent="center"
                  fontSize="md"
                  fontWeight="medium"
                  color="inherit"
                  px={4}
                  py={{ base: 1.5, md: 4 }}
                >
                  <Text
                    display={{ md: 'none' }}
                    fontSize="sm"
                    fontWeight="normal"
                    color={handleChangeColorModeValue(
                      colorMode,
                      'blackAlpha.600',
                      'whiteAlpha.600'
                    )}
                    mr={1}
                  >
                    Pending Reward
                  </Text>
                  {pendingReward}&nbsp;{token}
                </GridItem>
                <GridItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="md"
                  fontWeight="medium"
                  color={handleChangeColorModeValue(
                    colorMode,
                    'primary.400',
                    'primary.200'
                  )}
                  p={4}
                  pt={{ base: 2, md: 4 }}
                >
                  <Link href="#">
                    <Flex justify="center" align="center">
                      <Text mr={0.5}>Manage</Text>
                      <Icon as={FiChevronRight} />
                    </Flex>
                  </Link>
                </GridItem>
              </Grid>
            );
          }
        )}
      </Box>
    </Box>
  );
}
