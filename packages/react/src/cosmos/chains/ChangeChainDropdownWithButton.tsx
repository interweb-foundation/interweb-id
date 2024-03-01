import {
  Box,
  Button,
  Fade,
  Icon,
  Image,
  Skeleton,
  SkeletonCircle,
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
  InputProps,
  OptionProps
} from 'chakra-react-select';
import { Searcher } from 'fast-fuzzy';
import React, { useEffect, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { MdOutlineLinkOff } from 'react-icons/md';

import { handleChangeColorModeValue } from '../../default-component';
import {
  ChangeChainDropdownType,
  ChangeChainMenuType,
  DataType
} from '../../types';

const SkeletonOptions = () => {
  return (
    <Stack>
      <Stack isInline={true} alignItems="center" spacing={3}>
        <SkeletonCircle w={10} h={10} />
        <Skeleton w={40} h={6} />
      </Stack>
    </Stack>
  );
};

const SelectOptions = ({
  data,
  value,
  onClose,
  onChange,
  innerRef
}: ChangeChainMenuType) => {
  const { colorMode } = useColorMode();
  const menuHeight = useBreakpointValue({ base: 60, md: 56 });
  const customStyles = {
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: menuHeight,
      h: 'full',
      position: 'relative',
      mt: 4,
      mb: 0
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
          'rgba(220,220,220,0.1)',
          'rgba(60,60,60,0.1)'
        ),
        borderRadius: '3px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: handleChangeColorModeValue(
          colorMode,
          'rgba(0,0,0,0.1)',
          'rgba(255,255,255,0.1)'
        ),
        borderRadius: '10px',
        border: '3px solid transparent',
        backgroundClip: 'content-box'
      }
    }),
    option: (
      provided: SystemStyleObject,
      state: { isSelected: boolean; isFocused: boolean }
    ) => {
      return {
        ...provided,
        borderRadius: 'lg',
        color: 'inherit',
        bg: handleChangeColorModeValue(
          colorMode,
          state.isSelected
            ? state.isFocused
              ? 'primary.200'
              : 'primary.100'
            : state.isFocused
            ? 'blackAlpha.200'
            : 'transparent',
          state.isSelected
            ? state.isFocused
              ? 'primary.600'
              : 'primary.500'
            : state.isFocused
            ? 'whiteAlpha.200'
            : 'transparent'
        ),
        _notFirst: {
          mt: 2
        },
        _active: {
          bg: 'primary.50'
        },
        _disabled: { bg: 'transparent', _hover: { bg: 'transparent' } }
      };
    }
  };
  const IndicatorSeparator = () => {
    return null;
  };
  const ClearIndicator = () => {
    return null;
  };
  const DropdownIndicator = () => {
    return null;
  };
  const Input = (props: InputProps<DataType, true>) => {
    return (
      <Box ref={innerRef}>
        <chakraComponents.Input {...props} />
      </Box>
    );
  };
  const CustomOption = ({
    ...props
  }: OptionProps<DataType, true, GroupBase<DataType>>) => (
    <chakraComponents.Option {...props}>
      <Stack
        id={props.data.label}
        isInline={true}
        alignItems="center"
        spacing={3}
        overflow="hidden"
        wordBreak="break-word"
        color={handleChangeColorModeValue(
          colorMode,
          'blackAlpha.800',
          'whiteAlpha.800'
        )}
        w="full"
      >
        <Box
          minW={10}
          minH={10}
          maxW={10}
          maxH={10}
          w="full"
          h="full"
          borderRadius="full"
          overflow="hidden"
        >
          <Image
            src={
              props.data.icon?.png ||
              props.data.icon?.jpeg ||
              props.data.icon?.svg
            }
            fallbackSrc={`https://dummyimage.com/150/9e9e9e/ffffff&text=${props.data.label.slice(
              0,
              1
            )}`}
          />
        </Box>
        <Text fontSize="xl" fontWeight="semibold">
          {props.data.label}
        </Text>
      </Stack>
    </chakraComponents.Option>
  );

  function handleSelectChainDropdown(value: DataType | null) {
    onChange(value);
    onClose();
  }

  return (
    <AsyncSelect
      id="select-chain"
      instanceId="select-chain"
      colorScheme="purple"
      placeholder="Search the chain"
      chakraStyles={customStyles}
      menuIsOpen={true}
      isClearable={false}
      isMulti={false}
      isOptionDisabled={(option) => option.isDisabled}
      blurInputOnSelect={true}
      controlShouldRenderValue={false}
      defaultOptions={data}
      value={value}
      loadingMessage={() => <SkeletonOptions />}
      loadOptions={(inputValue, callback) => {
        const searcher = new Searcher(data, {
          keySelector: (obj) => obj.label
        });
        callback(searcher.search(inputValue));
      }}
      onChange={handleSelectChainDropdown}
      components={{
        DropdownIndicator,
        IndicatorSeparator,
        ClearIndicator,
        Input,
        Option: CustomOption
      }}
    />
  );
};

export const ChangeChainDropdownWithButton = ({
  data,
  selectedItem,
  onChange,
  chainDropdownLoading
}: ChangeChainDropdownType) => {
  const { colorMode } = useColorMode();
  const optionsMenuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isOpen, onToggle, onClose } = useDisclosure();
  useOutsideClick({
    ref: optionsMenuRef,
    handler: () => onClose()
  });

  useEffect(() => {
    if (isOpen && inputRef.current)
      inputRef.current.querySelector('input').focus();
  }, [isOpen, inputRef]);

  return (
    <Stack isInline={true} alignItems="center" position="relative">
      <Box ref={optionsMenuRef} flex={1} zIndex={150}>
        <Button
          display="flex"
          justifyContent="center"
          variant="unstyled"
          isLoading={chainDropdownLoading}
          w="full"
          h={12}
          bg={handleChangeColorModeValue(colorMode, 'gray.50', 'gray.700')}
          boxShadow={handleChangeColorModeValue(
            colorMode,
            '0px 1px 3px #ececec, 2px 1px 5px -2px #f8f8f8',
            '0px 1px 4px #484848, 2px 1px 5px -2px #000000'
          )}
          color={
            selectedItem
              ? handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.800',
                  'whiteAlpha.800'
                )
              : handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.600',
                  'whiteAlpha.600'
                )
          }
          _focus={{ outline: 'none' }}
          onClick={onToggle}
        >
          <Stack w="full" h="full" alignItems="center" isInline={true} px={4}>
            <Box
              display={selectedItem && selectedItem.icon ? 'block' : 'none'}
              w={8}
              h={8}
              maxW={8}
              maxH={8}
              minW={8}
              minH={8}
              borderRadius="full"
              border="1px solid"
              borderColor={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.100',
                'whiteAlpha.100'
              )}
              overflow="hidden"
            >
              <Image
                src={
                  selectedItem?.icon?.png ||
                  selectedItem?.icon?.jpeg ||
                  selectedItem?.icon?.svg
                }
                fallbackSrc={
                  'https://dummyimage.com/150/c4c4c4/ffffff&text=No+Image'
                }
              />
            </Box>
            <Text
              flex={1}
              fontSize="lg"
              fontWeight="semibold"
              textAlign="start"
            >
              {selectedItem && selectedItem.label
                ? selectedItem && selectedItem.label
                : 'Choose a chain'}
            </Text>
            <Icon as={FiChevronDown} w={6} h={6} />
          </Stack>
        </Button>
        <Box
          position="absolute"
          zIndex={100}
          w="full"
          minW="fit-content"
          right={0}
          display={isOpen ? 'block' : 'none'}
          borderRadius="lg"
          boxShadow={handleChangeColorModeValue(
            colorMode,
            '0 1px 3px 0 #0000001c',
            '0 1px 3px 0 #ffffff1a'
          )}
          bg={handleChangeColorModeValue(colorMode, 'white', 'gray.900')}
          mt={2}
          p={4}
        >
          <Fade in={isOpen}>
            <SelectOptions
              data={data}
              value={selectedItem}
              onClose={onClose}
              onChange={onChange}
              innerRef={inputRef}
            />
          </Fade>
        </Box>
      </Box>
      {selectedItem && (
        <Button
          display="flex"
          justifyContent="center"
          alignItems="center"
          variant="ghost"
          borderRadius="full"
          px={2}
          _focus={{ outline: 'none' }}
          onClick={() => onChange(null)}
        >
          <Icon as={MdOutlineLinkOff} w={5} h={5} />
        </Button>
      )}
    </Stack>
  );
};
