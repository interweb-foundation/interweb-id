import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalContent,
  ModalFooter,
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
import { BsInfoCircleFill } from 'react-icons/bs';
import { HiMinusSm } from 'react-icons/hi';
import { IoWarning } from 'react-icons/io5';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface headerType {
  name: string;
  commission: string;
  image: string;
}

interface availableType {
  name: string;
  available: string;
}

export default function Undelegate() {
  const { colorMode } = useColorMode();
  const [headerData, setHeaderData] = useState<headerType>({
    name: '',
    commission: '',
    image: ''
  });
  const [availableData, setAvailableData] = useState<availableType>({
    name: '',
    available: ''
  });
  const [inputValue, setInputValue] = useState<string>('0');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [submitLoading, setSubmitLoading] = useState(false);
  const buttonDirection = useBreakpointValue({
    base: false,
    md: true
  });
  const warningList = [
    'not receive staking rewards',
    'not be able to cancel the unbonding',
    'need to wait 28 days for the amount to be liquid'
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
    const allTokens = OsmosisTokens.map(({ name }) => ({
      name: name
    }));

    setHeaderData({
      name: 'CATMOS',
      commission: (
        parseInt(
          getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
            .toString()
            .replaceAll(',', '')
        ) / 1000000000
      ).toFixed(),
      image: 'https://imgflip.com/s/meme/Smiling-Cat.jpg'
    });
    setAvailableData({
      name: getShuffledArr([...allTokens])[0].name,
      available: (
        parseFloat(
          getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
            .toString()
            .replaceAll(',', '')
        ) / 100000000
      ).toFixed(4)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (submitLoading) {
      setTimeout(() => {
        setSubmitLoading(false);
      }, 1000);
      setTimeout(() => {
        onClose();
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitLoading]);

  return (
    <Center p={4}>
      <Button onClick={onOpen}>open modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
        autoFocus={false}
      >
        <ModalOverlay />
        <ModalContent maxW={{ base: 'xs', md: '2xl' }} borderRadius="2xl" p={6}>
          <Stack isInline={true} alignItems="center" spacing={4} mb={6}>
            <Box
              w={{ base: 16, md: 20 }}
              h={{ base: 16, md: 20 }}
              maxW={{ base: 16, md: 20 }}
              maxH={{ base: 16, md: 20 }}
              minW={{ base: 16, md: 20 }}
              minH={{ base: 16, md: 20 }}
              borderRadius="full"
              overflow="hidden"
            >
              <Image src={headerData.image} />
            </Box>
            <Box>
              <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                {headerData.name}
              </Text>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="medium"
                wordBreak="break-word"
              >
                Commission&nbsp;-&nbsp;{headerData.commission}%
              </Text>
            </Box>
          </Stack>
          <Stack
            isInline={true}
            spacing={4}
            borderRadius="2xl"
            border="2px solid"
            borderColor={handleChangeColorModeValue(
              colorMode,
              'orange.400',
              'orange.300'
            )}
            color={handleChangeColorModeValue(
              colorMode,
              'orange.400',
              'orange.300'
            )}
            p={{ base: 4, md: 6 }}
            mb={6}
          >
            <Icon
              as={IoWarning}
              w={{ base: 8, md: 14 }}
              h={{ base: 8, md: 14 }}
            />
            <Box>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="bold"
                mb={0.5}
              >
                Once the unbonding period begins you will:
              </Text>
              <List fontSize={{ base: 'lg', md: 'xl' }}>
                {warningList.map((items) => {
                  return (
                    <ListItem>
                      <ListIcon as={HiMinusSm} />
                      {items}
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Stack>
          <Stack
            isInline={true}
            borderRadius="2xl"
            border="2px solid"
            borderColor="primary.300"
            color="primary.300"
            spacing={4}
            p={{ base: 4, md: 6 }}
            mb={6}
          >
            <Icon
              as={BsInfoCircleFill}
              w={{ base: 8, md: 14 }}
              h={{ base: 8, md: 14 }}
            />
            <Box>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="bold"
                mb={0.5}
              >
                Try to switch validators?
              </Text>
              <Text fontSize={{ base: 'lg', md: 'xl' }} mb={0.5}>
                Use the 'Redelegate' feature to instantly stake your assets to
                another validator.
              </Text>
            </Box>
          </Stack>
          <Box mb={4}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.700',
                'whiteAlpha.700'
              )}
              mb={4}
            >
              Available for undelegation&ensp;
              <Text as="span" fontWeight="normal">
                {availableData.available}&ensp;{availableData.name}
              </Text>
            </Text>
            <NumberInput
              size="lg"
              display="flex"
              alignItems="center"
              defaultValue={0}
              value={inputValue}
              bg={handleChangeColorModeValue(
                colorMode,
                'whiteAlpha.500',
                'whiteAlpha.50'
              )}
              min={0}
              max={parseFloat(availableData.available)}
              onChange={(value) => setInputValue(value)}
            >
              <NumberInputField fontWeight="semibold" letterSpacing="wide" />
              <Stack direction="row" position="absolute" zIndex={5} right={4}>
                <Button
                  colorScheme="primary"
                  size="xs"
                  mx={2}
                  _focus={{ outline: 'none' }}
                  onClick={() => setInputValue(availableData.available)}
                >
                  MAX
                </Button>
                <Flex
                  position="relative"
                  justify="center"
                  align="center"
                  pl={2}
                >
                  <Box position="absolute" left={-1}>
                    <Divider orientation="vertical" h={12} />
                  </Box>
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight="medium"
                    wordBreak="break-word"
                  >
                    {availableData.name}
                  </Text>
                </Flex>
              </Stack>
            </NumberInput>
          </Box>
          <ModalFooter>
            <Stack
              isInline={buttonDirection}
              w={{ base: 'full', md: 'initial' }}
              spacing={4}
            >
              <Button
                w={{ base: 'full', md: 'initial' }}
                onClick={() => {
                  onClose();
                }}
              >
                Back
              </Button>
              <Button
                w={{ base: 'full', md: 'initial' }}
                colorScheme="primary"
                isLoading={submitLoading}
                onClick={() => {
                  setSubmitLoading(true);
                }}
              >
                Undelegate
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
