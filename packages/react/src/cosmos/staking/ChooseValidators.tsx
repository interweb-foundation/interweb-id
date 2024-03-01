import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  Icon,
  Image,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
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

import { handleChangeColorModeValue } from '../../default-component';

interface dataType extends OptionBase {
  id: number | string;
  label: string;
  value: string;
  image: string;
  available: string;
  isDisabled?: boolean;
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
  const menuHeight = useBreakpointValue({ base: 72, md: 64 });
  const customStyles = {
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: menuHeight,
      h: 'full',
      w: 'full',
      position: 'relative',
      mt: 2.5,
      mb: 4
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: menuHeight,
      bg: 'transparent',
      border: 'none',
      borderRadius: 'none',
      py: 0,
      pr: 2,
      // For Firefox
      scrollbarWidth: 'auto',
      scrollbarColor: handleChangeColorModeValue(
        colorMode,
        'rgba(0,0,0,0.3) rgba(0,0,0,0.2)',
        'rgba(255,255,255,0.2) rgba(255,255,255,0.1)'
      ),
      // For Chrome and other browsers except Firefox
      '&::-webkit-scrollbar': {
        width: '14px',
        background: handleChangeColorModeValue(
          colorMode,
          'rgba(160,160,160,0.1)',
          'rgba(255,255,255,0.1)'
        ),
        borderRadius: '3px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: handleChangeColorModeValue(
          colorMode,
          'rgba(0,0,0,0.1)',
          'rgba(255,255,255,0.1)'
        ),
        borderRadius: '3px'
      }
    }),
    control: (provided: SystemStyleObject) => ({
      ...provided,
      display: 'none'
    }),
    option: (
      provided: SystemStyleObject,
      state: { isSelected: boolean; isDisabled?: boolean }
    ) => ({
      ...provided,
      borderRadius: 'md',
      bg: state.isSelected
        ? handleChangeColorModeValue(colorMode, 'primary.100', 'primary.500')
        : 'transparent',
      color: 'inherit',
      p: 0,
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
      },
      _notLast: {
        mb: 1.5
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
        <Flex
          alignItems="center"
          px={2.5}
          py={props.data.id !== 'default' ? 2 : 1}
        >
          <Box
            display={props.data.id !== 'default' ? 'block' : 'none'}
            w={10}
            h={10}
            minW={10}
            minH={10}
            maxW={10}
            maxH={10}
            borderRadius="full"
            overflow="hidden"
            mr={2.5}
          >
            <Image src={props.data.image} />
          </Box>
          <Text fontSize="lg" fontWeight="medium">
            {children}
          </Text>
        </Flex>
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
      isOptionDisabled={(option) => option.isDisabled}
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

export default function ChooseValidators() {
  const { colorMode } = useColorMode();
  const [optionData, setOptionData] = useState<dataType[]>([
    {
      id: 'default',
      label: 'Select the validator',
      value: 'Select the validator',
      image: '',
      available: '',
      isDisabled: true
    }
  ]);
  const [selectedOption, setSelectedOption] = useState<dataType>(optionData[0]);
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

  useEffect(() => {
    // eslint-disable-next-line
    const getShuffledArr = (arr: any[]) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rand]] = [arr[rand], arr[i]];
      }
      return arr;
    };
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
        available: (
          parseFloat(
            getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .replaceAll(',', '')
          ) / 100000000
        ).toFixed(3)
      }));

      if (getData) setOptionData([...optionData, ...getData]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (submitLoading) {
      setTimeout(() => {
        setSelectedOption(optionData[0]);
        setInputValue('0');
        setShowInput(false);
        setSubmitLoading(false);
      }, 1000);
      setTimeout(() => {
        onClose();
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitLoading]);

  useEffect(() => {
    if (selectedOption.id !== 'default') setShowInput(true);
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
          <ModalHeader fontWeight="bold" textAlign="center" my={6}>
            Stake Tokens
          </ModalHeader>
          <Text fontWeight="semibold" mb={2}>
            Choose the validator:
          </Text>
          <Box position="relative" ref={optionsListRef} mb={8}>
            <Button
              size="lg"
              h="fit-content"
              w="full"
              boxShadow="sm"
              whiteSpace="break-spaces"
              onClick={onSelectToggle}
              _focus={{ outline: 'none' }}
            >
              <Flex
                w="full"
                justify={
                  selectedOption.id !== 'default' ? 'start' : 'space-between'
                }
                align="center"
                py={selectedOption.id !== 'default' ? 2.5 : 6}
              >
                <Box
                  display={selectedOption.id !== 'default' ? 'block' : 'none'}
                  borderRadius="full"
                  w={12}
                  h={12}
                  minW={12}
                  minH={12}
                  maxW={12}
                  maxH={12}
                  overflow="hidden"
                  mr={2.5}
                >
                  <Image src={selectedOption.image} />
                </Box>
                <Text textAlign="start" mr={1}>
                  {selectedOption.value}
                </Text>
                <Flex justify="end" flexGrow={1}>
                  <Icon as={FaCaretDown} />
                </Flex>
              </Flex>
            </Button>
            <Box
              position="absolute"
              top={0}
              zIndex={2000}
              bg={handleChangeColorModeValue(colorMode, 'gray.50', 'gray.600')}
              boxShadow="base"
              borderRadius="md"
              w="full"
              px={4}
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
          <Box display={showInput ? 'block' : 'none'} mb={2}>
            <Text fontWeight="semibold" mb={2}>
              Enter tokens to Stake
            </Text>
            <NumberInput
              size="lg"
              display="flex"
              alignItems="center"
              mb={1.5}
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
              <Box position="absolute" zIndex={5} right={4}>
                <Button
                  colorScheme="primary"
                  size="xs"
                  _focus={{ outline: 'none' }}
                  onClick={() => setInputValue(selectedOption.available)}
                >
                  MAX
                </Button>
              </Box>
            </NumberInput>
            <Text fontSize="sm" fontWeight="medium" mb={4}>
              Max Available tokens:&ensp;&ensp;
              <Text
                as="span"
                fontWeight="semibold"
                color={handleChangeColorModeValue(
                  colorMode,
                  'primary.500',
                  'primary.300'
                )}
              >
                {selectedOption.available}
              </Text>
            </Text>
          </Box>
          <ModalFooter
            display={showInput ? 'flex' : 'none'}
            justifyContent="center"
          >
            <Button
              size="lg"
              colorScheme="primary"
              maxW={{ md: 32 }}
              w="full"
              isDisabled={inputValue === '0'}
              isLoading={submitLoading}
              onClick={() => setSubmitLoading(true)}
            >
              STAKE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
