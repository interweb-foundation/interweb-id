import {
  Box,
  Button,
  Center,
  Collapse,
  Divider,
  Flex,
  Icon,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Stack,
  SystemStyleObject,
  Text,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  useOutsideClick
} from '@chakra-ui/react';
import {
  AsyncSelect,
  chakraComponents,
  GroupBase,
  OptionBase,
  OptionProps
} from 'chakra-react-select';
import React, { useEffect, useRef, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface headerType {
  name: string;
  commission: string;
  image: string;
}

interface dataType extends OptionBase {
  id: number | string;
  label: string;
  value: string;
  image: string;
  token: string;
  available: string;
}

const SelectOptions = ({
  optionData,
  onSelectClose,
  setSelectedOption
}: {
  optionData: dataType[];
  onSelectClose: () => void;
  setSelectedOption: (value: dataType) => void;
}) => {
  const { colorMode } = useColorMode();
  const menuHeight = useBreakpointValue({ base: 72, md: 60 });
  const customStyles = {
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: menuHeight,
      h: 'full',
      w: 'full',
      position: 'relative',
      my: 2
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: menuHeight,
      bg: 'transparent',
      border: 'none',
      borderRadius: 'none',
      // For Firefox
      scrollbarWidth: 'none',
      // For Chrome and other browsers except Firefox
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }),
    control: (provided: SystemStyleObject) => ({
      ...provided,
      display: 'none'
    }),
    option: (provided: SystemStyleObject, state: { isSelected: boolean }) => ({
      ...provided,
      borderRadius: 'md',
      bg: state.isSelected
        ? handleChangeColorModeValue(colorMode, 'primary.100', 'primary.500')
        : 'transparent',
      color: 'inherit',
      _hover: {
        bg: state.isSelected
          ? handleChangeColorModeValue(colorMode, 'primary.100', 'primary.500')
          : handleChangeColorModeValue(
              colorMode,
              'blackAlpha.200',
              'whiteAlpha.200'
            )
      },
      _disabled: {
        _hover: { bg: 'transparent' }
      }
    })
  };
  const IndicatorSeparator = () => {
    return null;
  };
  const DropdownIndicator = () => {
    return null;
  };
  const CustomOption = ({
    children,
    ...props
  }: OptionProps<dataType, true, GroupBase<dataType>>) => {
    return (
      <chakraComponents.Option {...props}>
        <Text fontWeight="medium" py={1}>
          {children}
        </Text>
      </chakraComponents.Option>
    );
  };

  return (
    <AsyncSelect
      placeholder="Search"
      chakraStyles={customStyles}
      isClearable={false}
      blurInputOnSelect={true}
      controlShouldRenderValue={false}
      menuIsOpen={true}
      defaultOptions={optionData}
      onChange={(selected) => {
        setSelectedOption(selected as unknown as dataType);
        onSelectClose();
      }}
      components={{
        DropdownIndicator,
        IndicatorSeparator,
        Option: CustomOption
      }}
    />
  );
};

export default function Redelgate() {
  const { colorMode } = useColorMode();
  const [optionData, setOptionData] = useState<dataType[]>([
    {
      id: '',
      label: '',
      value: '',
      image: '',
      token: '',
      available: ''
    }
  ]);
  const [selectedOption, setSelectedOption] = useState<dataType>({
    id: '',
    label: '',
    value: '',
    image: '',
    token: '',
    available: ''
  });
  const [headerData, setHeaderData] = useState<headerType>({
    name: '',
    commission: '',
    image: ''
  });
  const [inputValue, setInputValue] = useState<string>('0');
  const [showInput, setShowInput] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: selectIsOpen,
    onToggle: onSelectToggle,
    onClose: onSelectClose
  } = useDisclosure();
  const optionsListRef = useRef<HTMLDivElement | null>(null);
  const buttonDirection = useBreakpointValue({
    base: false,
    md: true
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

    (async () => {
      // get data
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/albums/1/photos'
      );
      // to JSON
      const json = await res.json();
      const getData = await json.map(({ id, title, url }) => ({
        id: id,
        label: title,
        value: title,
        image: url,
        token: allTokens[Math.floor(Math.random() * allTokens.length)].name,
        available: (
          parseFloat(
            getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .replaceAll(',', '')
          ) / 100000000
        ).toFixed(3)
      }));

      if (getData) setOptionData(getData);
    })();

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

  useEffect(() => {
    if (selectedOption.value.length > 0) setShowInput(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  useOutsideClick({
    ref: optionsListRef,
    handler: () => onSelectClose()
  });

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
          <Box mb={6}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Redelegate to:
            </Text>
            <Box position="relative" ref={optionsListRef}>
              <Button
                size="lg"
                h={'fit-content'}
                w="full"
                boxShadow="md"
                whiteSpace="break-spaces"
                onClick={onSelectToggle}
                _focus={{ outline: 'none' }}
              >
                {selectedOption.value.length > 0 ? (
                  <Flex justify="center" align="center" py={2.5}>
                    <Box
                      borderRadius="full"
                      w={12}
                      h={12}
                      minW={12}
                      minH={12}
                      maxW={12}
                      maxH={12}
                      overflow="hidden"
                      mr={2}
                    >
                      <Image src={selectedOption.image} />
                    </Box>
                    <Text textAlign="start" mr={1}>
                      {selectedOption.value}
                    </Text>
                    <Icon as={FaCaretDown} />
                  </Flex>
                ) : (
                  <Flex h={14} justify="center" align="center">
                    <Text fontSize="md" mr={1}>
                      Select validator
                    </Text>
                    <Icon as={FaCaretDown} />
                  </Flex>
                )}
              </Button>
              <Box
                position="absolute"
                zIndex={2000}
                bg={handleChangeColorModeValue(
                  colorMode,
                  'gray.50',
                  'gray.600'
                )}
                boxShadow="base"
                borderRadius="md"
                w="full"
                px={4}
                mt={2}
              >
                <Collapse in={selectIsOpen} animateOpacity>
                  <SelectOptions
                    optionData={optionData}
                    onSelectClose={onSelectClose}
                    setSelectedOption={setSelectedOption}
                  />
                </Collapse>
              </Box>
            </Box>
          </Box>
          <Box display={showInput ? 'block' : 'none'} mb={6}>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Available for undelegation&ensp;
              <Text as="span" fontWeight="normal">
                {selectedOption.available}&ensp;{selectedOption.token}
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
              max={parseFloat(selectedOption.available)}
              onChange={(value) => setInputValue(value)}
            >
              <NumberInputField fontWeight="semibold" letterSpacing="wide" />
              <Stack direction="row" position="absolute" zIndex={5} right={4}>
                <Button
                  colorScheme="primary"
                  size="xs"
                  mx={2}
                  _focus={{ outline: 'none' }}
                  onClick={() => setInputValue(selectedOption.available)}
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
                    {selectedOption.token}
                  </Text>
                </Flex>
              </Stack>
            </NumberInput>
          </Box>
          <Stack
            isInline={buttonDirection}
            w={{ base: 'full', md: 'initial' }}
            spacing={4}
            justify="end"
          >
            <Button
              w={{ base: 'full', md: 'initial' }}
              boxShadow="md"
              onClick={() => {
                onClose();
              }}
            >
              Back
            </Button>
            <Button
              w={{ base: 'full', md: 'initial' }}
              boxShadow="md"
              colorScheme="primary"
              isLoading={submitLoading}
              onClick={() => setSubmitLoading(true)}
            >
              Redelegate
            </Button>
          </Stack>
        </ModalContent>
      </Modal>
    </Center>
  );
}
