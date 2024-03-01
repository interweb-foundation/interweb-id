import {
  Box,
  Button,
  ButtonGroup,
  Center,
  IconButton,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  useOutsideClick
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface headerType {
  name: string;
  commission: string;
  image: string;
}

interface delegationTokenType {
  name: string;
  available: string;
}

export default function Delegate() {
  const { colorMode } = useColorMode();
  const buttonOptions = ['Undelegate', 'Redelegate'];
  const [headerData, setHeaderData] = useState<headerType>({
    name: '',
    commission: '',
    image: ''
  });
  const [delegationToken, setDelegationToken] = useState<delegationTokenType>({
    name: '',
    available: ''
  });
  const [selectedOption, setSelectedOption] = useState(buttonOptions[0]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isButtonOptionOpen,
    onOpen: onButtonOptionOpen,
    onClose: onButtonOptionClose
  } = useDisclosure();
  const buttonRef = useRef();
  const buttonDirection = useBreakpointValue({
    base: false,
    md: true
  });
  const tokenDirection = useBreakpointValue({
    base: false,
    md: true
  });

  useOutsideClick({
    ref: buttonRef,
    handler: () => onButtonOptionClose()
  });

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
    setDelegationToken({
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
          <Stack spacing={4} mb={6}>
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Description
              </Text>
              <Text fontSize="lg" fontWeight="medium">
                Wen witepupper?
              </Text>
            </Box>
            <Stack isInline={tokenDirection} justifyContent="space-between">
              <Text fontSize="lg" fontWeight="bold">
                My Delegation
              </Text>
              <Text fontSize="lg" fontWeight="medium">
                {delegationToken.name}&ensp;{delegationToken.available}
              </Text>
            </Stack>
          </Stack>
          <Stack
            isInline={buttonDirection}
            w={{ base: 'full', md: 'initial' }}
            justifyContent={{ base: 'center', md: 'end' }}
            spacing={4}
          >
            <Popover
              autoFocus={false}
              isOpen={isButtonOptionOpen}
              onOpen={onButtonOptionOpen}
              onClose={onButtonOptionClose}
            >
              <PopoverTrigger>
                <ButtonGroup
                  ref={buttonRef}
                  isAttached
                  variant="outline"
                  border="1px solid"
                  borderBottom={isButtonOptionOpen ? 'none' : '1px solid'}
                  borderColor={handleChangeColorModeValue(
                    colorMode,
                    'gray.200',
                    'whiteAlpha.900'
                  )}
                  borderRadius="md"
                  boxShadow="md"
                >
                  <Button
                    w="full"
                    border="none"
                    _hover={{ bg: 'none' }}
                    _focus={{ outline: 'none' }}
                  >
                    {selectedOption}
                  </Button>
                  <IconButton
                    aria-label="Add to friends"
                    icon={<BsChevronDown />}
                    border="none"
                    borderLeft="1px solid"
                    borderLeftColor={handleChangeColorModeValue(
                      colorMode,
                      'gray.200',
                      'whiteAlpha.900'
                    )}
                    boxShadow="md"
                    bg={
                      isButtonOptionOpen
                        ? handleChangeColorModeValue(
                            colorMode,
                            'blackAlpha.50',
                            'whiteAlpha.200'
                          )
                        : 'transparent'
                    }
                    _focus={{ outline: 'none' }}
                  />
                </ButtonGroup>
              </PopoverTrigger>
              <PopoverContent
                maxW={{ base: 64, md: 48 }}
                borderColor={handleChangeColorModeValue(
                  colorMode,
                  'gray.200',
                  'whiteAlpha.900'
                )}
                py={1}
                mt={-1}
              >
                <Button
                  variant="ghost"
                  borderRadius="none"
                  _focus={{ outline: 'none' }}
                  onClick={() => {
                    setSelectedOption(
                      buttonOptions.filter(
                        (option) => option !== selectedOption
                      )[0]
                    );
                    onButtonOptionClose();
                  }}
                >
                  {
                    buttonOptions.filter(
                      (option) => option !== selectedOption
                    )[0]
                  }
                </Button>
              </PopoverContent>
            </Popover>
            <Button
              w={{ base: 'full', md: 'initial' }}
              colorScheme="primary"
              isLoading={submitLoading}
              onClick={() => {
                setSubmitLoading(true);
              }}
            >
              Delegate
            </Button>
          </Stack>
        </ModalContent>
      </Modal>
    </Center>
  );
}
