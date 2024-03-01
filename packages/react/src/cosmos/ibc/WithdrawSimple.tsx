import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Icon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiArrowDownFill, RiArrowRightFill } from 'react-icons/ri';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface fromTokenType {
  name: string;
  address: string;
  availableBalance: string;
}

interface toTokenType {
  name: string;
  address: string;
}

export default function WithdrawSimple() {
  const { colorMode } = useColorMode();
  const [fromToken, setFromToken] = useState<fromTokenType>({
    name: '',
    address: '',
    availableBalance: ''
  });
  const [toToken, setToToken] = useState<toTokenType>({
    name: '',
    address: ''
  });
  const [inputValue, setInputValue] = useState<string>('');
  const [changeToToken, setChangeToToken] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const icon = useBreakpointValue({
    base: RiArrowDownFill,
    md: RiArrowRightFill
  });
  const allTokens = OsmosisTokens.map(({ name }) => ({
    name: name
  }));
  const defaultArray = [
    ...'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
    ...'abcdefghijklmnopqrstuvwxyz'.split(''),
    ...'0123456789'.split('')
  ];
  // eslint-disable-next-line
  const getShuffledArr = (arr: any[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[rand]] = [arr[rand], arr[i]];
    }
    return arr;
  };
  const getRandomLetter = (name: string) => {
    const randomLetter = getShuffledArr(defaultArray)
      .toString()
      .replaceAll(',', '')
      .slice(0, 32);
    return name.replaceAll(/[\-[\s[\.]/g, "") + randomLetter; // eslint-disable-line
  };

  useEffect(() => {
    const getFromToken = getShuffledArr([...allTokens])[0];
    const getToToken = getShuffledArr([...allTokens]).filter(
      ({ name }) => !(getFromToken.name === name)
    )[0];
    const getRandomBalance =
      parseFloat(
        getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
          .toString()
          .replaceAll(',', '')
      ) / 100000000;

    setFromToken({
      name: getFromToken.name,
      address: getRandomLetter(getFromToken.name),
      availableBalance: getRandomBalance.toFixed(4)
    });
    setToToken({
      name: getToToken.name,
      address: getRandomLetter(getToToken.name)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (changeToToken) {
      const getNewToToken = getShuffledArr([...allTokens]).filter(
        ({ name }) => !(fromToken.name === name) && !(toToken.name === name)
      )[0];
      const formatToName = getNewToToken.name.replaceAll(/[\-[\s[\.]/g, ""); // eslint-disable-line
      setToToken({
        name: getNewToToken.name,
        address: getRandomLetter(formatToName)
      });
      setChangeToToken(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeToToken]);

  return (
    <Center p={4}>
      <Button onClick={onOpen}>open modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
        <ModalOverlay />
        <ModalContent maxW={{ base: 'xs', md: '2xl' }} borderRadius="2xl" p={6}>
          <ModalHeader fontSize="2xl" fontWeight="bold" p={0} mb={6}>
            Withdraw IBC Asset
          </ModalHeader>
          <ModalCloseButton top={6} right={6} />
          <Text fontSize="xl" fontWeight="bold" mb={3}>
            IBC Transfer
          </Text>
          <Grid
            templateColumns={{ base: '1fr', md: '1fr auto 1fr' }}
            justifyContent="center"
            alignItems="center"
            mb={6}
          >
            <GridItem
              border="1px solid"
              borderColor={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.200',
                'whiteAlpha.300'
              )}
              borderRadius="2xl"
              p={4}
            >
              <Text fontWeight="semibold" mr={4}>
                From
              </Text>
              <Text
                maxW={{ base: 60, md: 64 }}
                height="1.5em"
                fontWeight="semibold"
                color={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.500',
                  'whiteAlpha.500'
                )}
                whiteSpace="break-spaces"
                overflow="hidden"
                title={fromToken.address}
                _before={{
                  content: 'attr(title)',
                  width: '50%',
                  float: 'right',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  direction: 'rtl'
                }}
              >
                {fromToken.address}
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={2}
            >
              <Icon
                as={icon}
                color={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.500',
                  'whiteAlpha.500'
                )}
              />
            </GridItem>
            <GridItem
              border="1px solid"
              borderColor={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.200',
                'whiteAlpha.300'
              )}
              borderRadius="2xl"
              p={4}
            >
              <Text fontWeight="semibold" mr={4}>
                To
              </Text>
              <Stack isInline={true} justify="space-between">
                <Text
                  flex={1}
                  maxW={{ base: 48, md: 52 }}
                  height="1.5em"
                  fontWeight="semibold"
                  color={handleChangeColorModeValue(
                    colorMode,
                    'blackAlpha.500',
                    'whiteAlpha.500'
                  )}
                  whiteSpace="break-spaces"
                  overflow="hidden"
                  title={toToken.address}
                  _before={{
                    content: 'attr(title)',
                    width: '50%',
                    float: 'right',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    direction: 'rtl'
                  }}
                >
                  {toToken.address}
                </Text>
                <Button
                  size="xs"
                  colorScheme="primary"
                  _focus={{ outline: 'none' }}
                  onClick={() => setChangeToToken(true)}
                >
                  Edit
                </Button>
              </Stack>
            </GridItem>
          </Grid>
          <Text fontSize="xl" fontWeight="bold" mb={3}>
            Amount To Deposit
          </Text>
          <Box
            borderRadius="2xl"
            border="1px solid"
            borderColor="orange.300"
            px={4}
            py={6}
            mb={12}
          >
            <Text fontWeight="semibold" mr={4} mb={3}>
              Available balance:&ensp;
              <Text
                as="span"
                color={handleChangeColorModeValue(
                  colorMode,
                  'primary.500',
                  'primary.300'
                )}
              >
                {fromToken.availableBalance}&ensp;{fromToken.name}
              </Text>
            </Text>
            <NumberInput
              size="lg"
              display="flex"
              alignItems="center"
              defaultValue={15}
              value={inputValue}
              bg={handleChangeColorModeValue(
                colorMode,
                'whiteAlpha.500',
                'whiteAlpha.50'
              )}
              min={0}
              max={parseFloat(fromToken.availableBalance)}
              onChange={(value) => setInputValue(value)}
            >
              <NumberInputField fontWeight="semibold" letterSpacing="wide" />
              <Button
                position="absolute"
                zIndex={5}
                right={4}
                colorScheme="primary"
                size="xs"
                ml={2}
                _focus={{ outline: 'none' }}
                onClick={() => setInputValue(fromToken.availableBalance)}
              >
                MAX
              </Button>
            </NumberInput>
          </Box>
          <Button
            h={14}
            colorScheme="primary"
            w="full"
            isDisabled={inputValue === '0' || inputValue === '' ? true : false}
            onClick={onClose}
          >
            Withdraw
          </Button>
        </ModalContent>
      </Modal>
    </Center>
  );
}
