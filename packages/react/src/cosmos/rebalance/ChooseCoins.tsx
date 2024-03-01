import {
  Box,
  Flex,
  Image,
  Skeleton,
  SystemStyleObject,
  Text,
  useColorMode
} from '@chakra-ui/react';
import {
  AsyncSelect,
  chakraComponents,
  GroupBase,
  OptionBase,
  OptionProps
} from 'chakra-react-select';
import React, { useEffect, useState } from 'react';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface dataType extends OptionBase {
  label: string;
  value: string;
  imgSrc: string;
  ibc?: {
    source_channel: string;
    dst_channel: string;
    source_denom: string;
  };
}

const SkeletonOptions = () => {
  return (
    <>
      <Flex justify="space-between" align="center" mb={{ base: 2, sm: 4 }}>
        <Flex align="center">
          <Skeleton
            w={{ base: 10, sm: 16 }}
            h={{ base: 10, sm: 16 }}
            mr={{ base: 2, sm: 4 }}
          />
          <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
        </Flex>
        <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
      </Flex>
      <Flex justify="space-between" align="center" mb={{ base: 2, sm: 4 }}>
        <Flex align="center">
          <Skeleton
            w={{ base: 10, sm: 16 }}
            h={{ base: 10, sm: 16 }}
            mr={{ base: 2, sm: 4 }}
          />
          <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
        </Flex>
        <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
      </Flex>
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Skeleton
            w={{ base: 10, sm: 16 }}
            h={{ base: 10, sm: 16 }}
            mr={{ base: 2, sm: 4 }}
          />
          <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
        </Flex>
        <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
      </Flex>
    </>
  );
};

export default function () {
  const { colorMode } = useColorMode();
  const [data, setData] = useState<dataType[]>([]);
  const [selectedItem, setSelectedItem] = useState<dataType>();
  const [loading, setLoading] = useState(true);

  const customStyles = {
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: 40,
      h: 'full',
      position: 'relative',
      mt: 4,
      mb: 0
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: 40,
      bg: 'transparent',
      border: 'none',
      borderRadius: 'none',
      py: 0,
      pr: { base: 2, sm: 4 },
      // For Firefox
      scrollbarWidth: 'auto',
      scrollbarColor: handleChangeColorModeValue(
        colorMode,
        'rgba(0,0,0,0.3) rgba(0,0,0,0.2)',
        'rgba(255,255,255,0.2) rgba(255,255,255,0.1)'
      ),
      // For Chrome and other browsers except Firefox
      '&::-webkit-scrollbar': {
        width: '18px',
        background: handleChangeColorModeValue(
          colorMode,
          'rgba(160,160,160,0.1)',
          'rgba(255,255,255,0.1)'
        ),
        borderRadius: '4px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: handleChangeColorModeValue(
          colorMode,
          'rgba(0,0,0,0.1)',
          'rgba(255,255,255,0.1)'
        ),
        borderRadius: '4px'
      }
    }),
    option: (provided: SystemStyleObject, state: { isSelected: boolean }) => ({
      ...provided,
      borderRadius: 'lg',
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
        <Flex id={props.data.value} align="center" w="full">
          <Flex align="center" flex={1} mr={2}>
            <Box
              minW={{ base: 12, sm: 16 }}
              minH={{ base: 12, sm: 16 }}
              maxW={{ base: 12, sm: 16 }}
              maxH={{ base: 12, sm: 16 }}
              w="full"
              h="full"
              mr={{ base: 3, sm: 4 }}
            >
              <Image src={props.data.imgSrc} />
            </Box>
            <Box>
              <Text
                fontSize={{ base: 'lg', sm: '2xl' }}
                fontWeight="bold"
                textAlign="start"
              >
                {children}
              </Text>
              <Text
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight="bold"
                textAlign="start"
                color={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.700',
                  'whiteAlpha.700'
                )}
              >
                {props.data.ibc?.source_channel}
              </Text>
            </Box>
          </Flex>
          <Text
            fontSize={{ base: 'md', sm: 'xl' }}
            fontWeight="semibold"
            textAlign="end"
            wordBreak="break-word"
          >
            3.141595
          </Text>
        </Flex>
      </chakraComponents.Option>
    );
  };

  setTimeout(() => {
    setLoading(false);
  }, 500);

  useEffect(() => {
    if (!loading && OsmosisTokens.length > 0) {
      const getDataArray = OsmosisTokens.map(({ name, imgSrc, traces }) => ({
        label: name,
        value: name,
        imgSrc: imgSrc,
        ibc: {
          source_channel: 'channel-320',
          dst_channel: 'channel-1',
          source_denom: traces.counterparty.base_denom
        }
      }));
      setData(getDataArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Box p={3}>
      {loading ? (
        <SkeletonOptions />
      ) : (
        <AsyncSelect
          placeholder="Search"
          chakraStyles={customStyles}
          isClearable={false}
          // isOptionDisabled={(option) => option.label === 'Ion'} // test option disabled
          blurInputOnSelect={true}
          controlShouldRenderValue={false}
          menuIsOpen={true}
          loadingMessage={() => <SkeletonOptions />}
          defaultOptions={data}
          value={selectedItem}
          loadOptions={(inputValue, callback) => {
            setTimeout(() => {
              const values = data.filter((option) =>
                option.label.toLowerCase().includes(inputValue.toLowerCase())
              );
              callback(values);
            }, 1000);
          }}
          onChange={(selectedOption) => {
            let value = {};
            value = { ...selectedOption };
            setSelectedItem(value as dataType);
          }}
          components={{
            DropdownIndicator,
            IndicatorSeparator,
            Option: CustomOption
          }}
        />
      )}
    </Box>
  );
}
