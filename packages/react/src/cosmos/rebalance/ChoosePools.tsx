import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Link,
  Skeleton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spinner,
  Stack,
  SystemStyleObject,
  Text,
  useColorMode
} from '@chakra-ui/react';
import {
  AsyncSelect,
  chakraComponents,
  ControlProps,
  GroupBase,
  MenuListProps,
  OptionProps
} from 'chakra-react-select';
import React, { useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { RiCloseCircleFill } from 'react-icons/ri';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface poolsDataType {
  key: string;
  token1: {
    name: string;
    imgSrc: string;
  };
  token2?: {
    name: string;
    imgSrc: string;
  };
  percent: string;
}

interface optionsDataType {
  key: string;
  value: string;
  token1: {
    name: string;
    imgSrc: string;
  };
  token2?: {
    name: string;
    imgSrc: string;
  };
}

const SkeletonPoolsLoading = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      border="1px solid"
      borderColor={handleChangeColorModeValue(
        colorMode,
        'gray.100',
        'whiteAlpha.100'
      )}
      borderRadius="3xl"
      py={4}
      px={{ base: 4, md: 8 }}
      flexDirection={{ base: 'column', sm: 'row' }}
      mb={8}
    >
      <Flex align="center" flex={2} mb={{ base: 4, sm: 0 }}>
        <Flex
          minW={{ base: 10, sm: 12, md: 14 }}
          minH={{ base: 10, sm: 12, md: 14 }}
          maxW={{ base: 10, sm: 12, md: 14 }}
          maxH={{ base: 10, sm: 12, md: 14 }}
          w="full"
          h="full"
          bg="whiteAlpha.900"
          borderRadius="full"
          border="1px solid"
          borderColor={handleChangeColorModeValue(
            colorMode,
            'gray.100',
            'whiteAlpha.100'
          )}
          overflow="hidden"
          justify="center"
          align="center"
        >
          <Spinner
            size="lg"
            thickness="4px"
            speed="0.55s"
            color={handleChangeColorModeValue(
              colorMode,
              'primary.600',
              'primary.200'
            )}
          />
        </Flex>
        <Flex
          position="relative"
          left={{ base: -5, sm: -6 }}
          minW={{ base: 10, sm: 12, md: 14 }}
          minH={{ base: 10, sm: 12, md: 14 }}
          maxW={{ base: 10, sm: 12, md: 14 }}
          maxH={{ base: 10, sm: 12, md: 14 }}
          w="full"
          h="full"
          bg="whiteAlpha.900"
          borderRadius="full"
          border="1px solid"
          borderColor={handleChangeColorModeValue(
            colorMode,
            'gray.100',
            'whiteAlpha.100'
          )}
          overflow="hidden"
          justify="center"
          align="center"
        >
          <Spinner
            size="lg"
            thickness="4px"
            speed="0.5s"
            color={handleChangeColorModeValue(
              colorMode,
              'primary.600',
              'primary.200'
            )}
          />
        </Flex>
        <Box flex={1} pr={{ base: 0, sm: 6 }}>
          <Skeleton w={{ base: 'full', md: 48 }} h={6} mb={4} />
          <Skeleton w={16} h={4} />
        </Box>
      </Flex>

      <Flex flex={1} align="center">
        <Skeleton w="full" h={8} />
      </Flex>
    </Flex>
  );
};

const SkeletonOptionsLoading = () => {
  return (
    <Box mb={8}>
      <Box pb={4}>
        <Skeleton w="full" h={{ base: 8, sm: 10 }} />
      </Box>
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
    </Box>
  );
};

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

const Pools = ({
  useSmallIcons,
  poolsData,
  setPoolsData,
  setRemovePool
}: {
  useSmallIcons: boolean;
  poolsData: poolsDataType[];
  setPoolsData: (poolsDataType: poolsDataType[]) => void;
  setRemovePool: (poolsDataType: poolsDataType) => void;
}) => {
  const { colorMode } = useColorMode();
  const [showRemoveIcon, setShoeRemoveIcon] = useState<number | null>(null);
  return (
    <Stack mb={8}>
      <Text>Pools</Text>
      {poolsData.length === 0 ? (
        <Flex
          align="center"
          justify="center"
          border="1px solid"
          borderColor={handleChangeColorModeValue(
            colorMode,
            'gray.100',
            'whiteAlpha.100'
          )}
          borderRadius="3xl"
          overflow="hidden"
          px={8}
          py={4}
        >
          <Text
            background={handleChangeColorModeValue(
              colorMode,
              'linear-gradient(180deg, rgba(0,60,255,1) 0%, rgba(130,75,220,1) 50%, rgba(255,0,0,1) 100%)',
              'linear-gradient(180deg, rgba(175,20,255,1) 0%, rgba(65,90,255,1) 50%, rgba(255,45,45,1) 100%)'
            )}
            backgroundClip="text"
            color="transparent"
            fontWeight="bold"
            fontSize="4xl"
            textAlign="center"
          >
            NO POOLS SELECTED
          </Text>
        </Flex>
      ) : (
        poolsData.map(({ key, token1, token2, percent }, i) => {
          return (
            <Grid
              templateColumns={{ base: 'auto 1fr', sm: 'auto 2fr 1fr' }}
              position="relative"
              key={i}
              border="1px solid"
              borderColor={handleChangeColorModeValue(
                colorMode,
                'gray.100',
                'whiteAlpha.100'
              )}
              borderRadius="3xl"
              alignItems="center"
              onMouseEnter={() => setShoeRemoveIcon(i)}
              onMouseLeave={() => setShoeRemoveIcon(null)}
              p={4}
              pl={{ base: 4, md: 8 }}
            >
              <GridItem>
                <Flex align="center">
                  <Box
                    minW={{
                      base: useSmallIcons ? 8 : 10,
                      sm: useSmallIcons ? 8 : 12,
                      md: useSmallIcons ? 10 : 14
                    }}
                    minH={{
                      base: useSmallIcons ? 8 : 10,
                      sm: useSmallIcons ? 8 : 12,
                      md: useSmallIcons ? 10 : 14
                    }}
                    maxW={{
                      base: useSmallIcons ? 8 : 10,
                      sm: useSmallIcons ? 8 : 12,
                      md: useSmallIcons ? 10 : 14
                    }}
                    maxH={{
                      base: useSmallIcons ? 8 : 10,
                      sm: useSmallIcons ? 8 : 12,
                      md: useSmallIcons ? 10 : 14
                    }}
                    w="full"
                    h="full"
                    bg="whiteAlpha.900"
                    borderRadius="full"
                    border="1px solid"
                    borderColor={handleChangeColorModeValue(
                      colorMode,
                      'gray.100',
                      'whiteAlpha.100'
                    )}
                    overflow="hidden"
                  >
                    <Image src={token1.imgSrc} />
                  </Box>
                  <Box
                    position="relative"
                    left={{
                      base: useSmallIcons ? -3 : -5,
                      sm: useSmallIcons ? -4 : -6
                    }}
                    zIndex={5}
                    minW={{
                      base: useSmallIcons ? 8 : 10,
                      sm: useSmallIcons ? 8 : 12,
                      md: useSmallIcons ? 10 : 14
                    }}
                    minH={{
                      base: useSmallIcons ? 8 : 10,
                      sm: useSmallIcons ? 8 : 12,
                      md: useSmallIcons ? 10 : 14
                    }}
                    maxW={{
                      base: useSmallIcons ? 8 : 10,
                      sm: useSmallIcons ? 8 : 12,
                      md: useSmallIcons ? 10 : 14
                    }}
                    maxH={{
                      base: useSmallIcons ? 8 : 10,
                      sm: useSmallIcons ? 8 : 12,
                      md: useSmallIcons ? 10 : 14
                    }}
                    w="full"
                    h="full"
                    bg={!token2 ? '' : 'whiteAlpha.900'}
                    borderRadius="full"
                    border={!token2 ? '' : '1px solid'}
                    borderColor={handleChangeColorModeValue(
                      colorMode,
                      'gray.100',
                      'whiteAlpha.100'
                    )}
                    overflow="hidden"
                  >
                    <Image src={token2?.imgSrc} />
                  </Box>
                </Flex>
              </GridItem>
              <GridItem>
                <Text fontWeight="semibold" wordBreak="break-word">
                  {key}
                </Text>
                <Text
                  color={handleChangeColorModeValue(
                    colorMode,
                    'gray.600',
                    'whiteAlpha.700'
                  )}
                >
                  {percent}%
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 4, sm: 'auto' }}>
                <Slider
                  step={0.01}
                  colorScheme="primary"
                  value={parseFloat(percent)}
                  onChange={(val) => {
                    const newVal = poolsData.map(
                      ({ percent, key: allKey, ...rest }) => {
                        if (allKey === key)
                          return { ...rest, key, percent: val.toString() };
                        return { ...rest, key: allKey, percent };
                      }
                    );
                    setPoolsData(newVal);
                  }}
                >
                  <SliderTrack h={1.5} borderRadius="full">
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={5} boxShadow="0 0px 3px -1px gray" />
                </Slider>
              </GridItem>
              {showRemoveIcon === i && (
                <GridItem position="absolute" left={-3}>
                  <Button
                    variant="unstyled"
                    w="fit-content"
                    h="fit-content"
                    minW="fit-content"
                    minH="fit-content"
                    borderRadius="full"
                    color="red.500"
                    _hover={{ color: 'red.400' }}
                    _active={{ color: 'red.700' }}
                    _focus={{ outline: 'none', color: 'red.600' }}
                    paddingInline={0}
                    onClick={() => setRemovePool(poolsData[i])}
                  >
                    <Icon w={6} h={6} as={RiCloseCircleFill} />
                  </Button>
                </GridItem>
              )}
            </Grid>
          );
        })
      )}
    </Stack>
  );
};

const AllPoolOptions = ({
  useSmallIcons,
  poolsData,
  optionsData,
  setSelectedToken
}: {
  useSmallIcons: boolean;
  poolsData: poolsDataType[];
  optionsData: optionsDataType[];
  setSelectedToken: (value: optionsDataType) => void;
}) => {
  const { colorMode } = useColorMode();
  const customStyles = {
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      position: 'relative',
      mt: 4,
      mb: 6
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: 'xl',
      h: 'auto',
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
        borderRadius: '3px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: handleChangeColorModeValue(
          colorMode,
          'rgba(0,0,0,0.08)',
          'rgba(255,255,255,0.08)'
        ),
        borderRadius: '3px'
      }
    }),
    control: (provided: SystemStyleObject) => ({
      ...provided,
      bg: 'whiteAlpha.200'
    }),
    option: (provided: SystemStyleObject, state: { isSelected: boolean }) => ({
      ...provided,
      borderRadius: 'md',
      pl: 0,
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
  const CustomControl = ({
    children,
    ...props
  }: ControlProps<optionsDataType, true, GroupBase<optionsDataType>>) => {
    return (
      <chakraComponents.Control {...props}>
        <Flex w={5} justify="center" align="center" ml={4}>
          <Icon as={IoMdSearch} w="full" h="full" />
        </Flex>
        {children}
      </chakraComponents.Control>
    );
  };
  const CustomMenuList = (
    props: MenuListProps<optionsDataType, true, GroupBase<optionsDataType>>
  ) => {
    return (
      <Box
        border="1px solid"
        borderColor={handleChangeColorModeValue(
          colorMode,
          'blackAlpha.50',
          'whiteAlpha.50'
        )}
        borderRadius="md"
        overflow="hidden"
      >
        <Grid
          w="full"
          templateColumns={{
            base: '2.5rem 1fr',
            md: '2.5rem 3fr 1fr'
          }}
          rowGap={1}
          position="sticky"
          zIndex={8}
          top={0}
          left={0}
          px={4}
          py={2}
          mb="1px"
          bg={handleChangeColorModeValue(
            colorMode,
            'blackAlpha.50',
            'whiteAlpha.50'
          )}
          fontSize="sm"
          fontWeight="medium"
        >
          <GridItem>
            <Text>#</Text>
          </GridItem>
          <GridItem>
            <Text>POOLS</Text>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 'auto' }}>
            <Text
              textAlign={{ base: 'start', md: 'end' }}
              pl={{ base: 10, md: 0 }}
              pr={{ md: 9 }}
            >
              LIQUIDITY
            </Text>
          </GridItem>
        </Grid>
        <chakraComponents.MenuList {...props}>
          {props.children}
        </chakraComponents.MenuList>
      </Box>
    );
  };
  const CustomOption = (
    props: OptionProps<optionsDataType, true, GroupBase<optionsDataType>>
  ) => {
    const { data, options } = props;
    const OrderedListItem = options.findIndex((v) => v === data) + 1;
    const [hoverItem, setHoverItem] = useState<string | null>(null);

    return (
      <chakraComponents.Option {...props}>
        <Grid
          w="full"
          templateColumns={{
            base: '2.5rem 1fr',
            sm: '2.5rem auto 1fr',
            md: '2.5rem auto 2fr 1fr'
          }}
          rowGap={{ base: 2, sm: hoverItem === data.key ? 2 : 0 }}
          position="relative"
          alignItems="center"
          onMouseEnter={() => setHoverItem(data.key)}
          onMouseLeave={() => setHoverItem(null)}
          py={{ base: 4, md: 2 }}
        >
          <GridItem rowSpan={{ base: 3, sm: 2, md: 'auto' }} alignSelf="center">
            <Text fontSize="lg" fontWeight="semibold" textAlign="center">
              {OrderedListItem}
            </Text>
          </GridItem>
          <GridItem>
            <Flex align="center">
              <Box
                minW={{
                  base: useSmallIcons ? 8 : 12,
                  md: useSmallIcons ? 10 : 14
                }}
                minH={{
                  base: useSmallIcons ? 8 : 12,
                  md: useSmallIcons ? 10 : 14
                }}
                maxW={{
                  base: useSmallIcons ? 8 : 12,
                  md: useSmallIcons ? 10 : 14
                }}
                maxH={{
                  base: useSmallIcons ? 8 : 12,
                  md: useSmallIcons ? 10 : 14
                }}
                w="full"
                h="full"
                bg="whiteAlpha.900"
                borderRadius="full"
                border="1px solid"
                borderColor={handleChangeColorModeValue(
                  colorMode,
                  'gray.100',
                  'whiteAlpha.100'
                )}
                overflow="hidden"
              >
                <Image src={data.token1.imgSrc} />
              </Box>
              <Box
                position="relative"
                left={{
                  base: useSmallIcons ? -3 : -5,
                  sm: useSmallIcons ? -4 : -6
                }}
                zIndex={5}
                minW={{
                  base: useSmallIcons ? 8 : 12,
                  md: useSmallIcons ? 10 : 14
                }}
                minH={{
                  base: useSmallIcons ? 8 : 12,
                  md: useSmallIcons ? 10 : 14
                }}
                maxW={{
                  base: useSmallIcons ? 8 : 12,
                  md: useSmallIcons ? 10 : 14
                }}
                maxH={{
                  base: useSmallIcons ? 8 : 12,
                  md: useSmallIcons ? 10 : 14
                }}
                w="full"
                h="full"
                bg={!data.token2 ? '' : 'whiteAlpha.900'}
                borderRadius="full"
                border={!data.token2 ? '' : '1px solid'}
                borderColor={handleChangeColorModeValue(
                  colorMode,
                  'gray.100',
                  'whiteAlpha.100'
                )}
                overflow="hidden"
              >
                <Image src={data.token2?.imgSrc} />
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            colStart={{ base: 2, sm: 'auto' }}
            colEnd={{ base: 3, sm: 'auto' }}
          >
            <Text fontSize="lg" fontWeight="semibold" wordBreak="break-word">
              {data.key}
            </Text>
          </GridItem>
          <GridItem
            display="flex"
            justifyContent="end"
            colStart={{ base: 2, md: 'auto' }}
            colEnd={{ base: 4, md: 'auto' }}
          >
            {hoverItem === data.key && (
              <Button
                colorScheme="primary"
                w={{ base: 'full', md: 'auto' }}
                borderRadius="full"
              >
                Add Pool
              </Button>
            )}
          </GridItem>
        </Grid>
      </chakraComponents.Option>
    );
  };
  const filter = (inputValue: string) =>
    optionsData.filter((option) =>
      option.key.toLowerCase().includes(inputValue.toLowerCase())
    );
  const loadOptions = (inputValue: string) => {
    return new Promise((resolve) => {
      // using setTimeout to emulate a call to server
      setTimeout(() => {
        resolve(filter(inputValue));
      }, 500);
    });
  };
  const value = optionsData.filter(({ key }) =>
    poolsData.map((v) => v.key).includes(key)
  );

  return (
    <AsyncSelect
      id="pools"
      placeholder="Search"
      chakraStyles={customStyles}
      isClearable={false}
      blurInputOnSelect={true}
      controlShouldRenderValue={false}
      menuIsOpen={true}
      isMulti={true}
      cacheOptions={false}
      loadingMessage={() => <SkeletonOptions />}
      loadOptions={loadOptions as unknown as any} // eslint-disable-line
      defaultOptions={optionsData}
      value={value}
      onChange={(val) => {
        const value = val as any as optionsDataType[]; // eslint-disable-line
        value.map((v) => setSelectedToken(v));
      }}
      components={{
        DropdownIndicator,
        IndicatorSeparator,
        Option: CustomOption,
        Control: CustomControl,
        MenuList: CustomMenuList
      }}
    />
  );
};

export default function ({ useSmallIcons = true }: { useSmallIcons: boolean }) {
  const { colorMode } = useColorMode();
  const [poolsData, setPoolsData] = useState<poolsDataType[]>([]);
  const [optionsData, setOptionsData] = useState<optionsDataType[]>([]);
  const [removePool, setRemovePool] = useState<poolsDataType | undefined>(
    undefined
  );
  const [selectedToken, setSelectedToken] = useState<
    optionsDataType | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

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
      label: name,
      value: name,
      chainName: name,
      imgSrc: imgSrc
    }));
    const poolOptionToken1 = getShuffledArr([...allTokens]);
    const poolOptionToken2 = getShuffledArr([...allTokens]).map((v, i) => {
      if (v === poolOptionToken1[i]) return undefined;
      return v;
    });
    const getOptionsData = [...Array(poolOptionToken1.length)]
      .fill(undefined)
      .map((_, i) => {
        return {
          label: `${poolOptionToken1[i].name}${
            poolOptionToken2[i] ? '/' + poolOptionToken2[i].name : ''
          }`,
          key: `${poolOptionToken1[i].name}${
            poolOptionToken2[i] ? '/' + poolOptionToken2[i].name : ''
          }`,
          value: `${poolOptionToken1[i].name}${
            poolOptionToken2[i] ? '/' + poolOptionToken2[i].name : ''
          }`,
          token1: poolOptionToken1[i],
          token2: poolOptionToken2[i]
        };
      });
    const getRandomPools = getShuffledArr(getOptionsData).slice(
      0,
      Math.floor(Math.random() * 5 + 1)
    );
    const formatOptions = getOptionsData.filter(
      (v) => !getRandomPools.map((val) => val.key).includes(v.key)
    );
    const formatPools = getRandomPools.map(({ key, token1, token2 }) => {
      const formatValue = Math.random() * 100 + 1;
      return {
        key: key,
        token1: token1,
        token2: token2,
        percent: formatValue === 100 ? '100' : formatValue.toFixed(2)
      };
    });
    setPoolsData(formatPools);
    setOptionsData(formatOptions);
  }, []);

  useEffect(() => {
    if (selectedToken) {
      const formatSelectedToken = {
        key: selectedToken.key,
        token1: selectedToken.token1,
        token2: selectedToken.token2,
        percent: '0'
      };
      const concatArr = [...poolsData, formatSelectedToken];
      const updateOptions = optionsData.filter(
        ({ key }) => !(selectedToken.key === key)
      );
      setPoolsData(concatArr);
      setOptionsData(updateOptions);
      setSelectedToken(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedToken]);

  useEffect(() => {
    if (removePool) {
      const updatePoolsArr = poolsData.filter((v) => v !== removePool);
      const formatData = {
        label: `${removePool.token1.name}${
          removePool.token2 ? '/' + removePool.token2.name : ''
        }`,
        key: `${removePool.token1.name}${
          removePool.token2 ? '/' + removePool.token2.name : ''
        }`,
        value: `${removePool.token1.name}${
          removePool.token2 ? '/' + removePool.token2.name : ''
        }`,
        token1: removePool.token1,
        token2: removePool.token2
      };
      const concatOptionsArr = [...optionsData, formatData];
      const concatOptionsArrIds = concatOptionsArr.map((o) => o.key);
      const getNewArr = concatOptionsArr.filter(
        ({ key }, index) => !concatOptionsArrIds.includes(key, index + 1)
      );
      setPoolsData(updatePoolsArr);
      setOptionsData(getNewArr);
      setRemovePool(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removePool]);

  return (
    <Box p={8}>
      <Box
        border="1px solid"
        borderColor={handleChangeColorModeValue(
          colorMode,
          'gray.100',
          'whiteAlpha.100'
        )}
        borderRadius="3xl"
        p={{ base: 6, md: 8 }}
      >
        <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
          Rebalancer
        </Text>
        {loading ? (
          <SkeletonPoolsLoading />
        ) : (
          <Pools
            useSmallIcons={useSmallIcons}
            poolsData={poolsData}
            setRemovePool={setRemovePool}
            setPoolsData={setPoolsData}
          />
        )}
        {loading ? (
          <SkeletonOptionsLoading />
        ) : (
          <AllPoolOptions
            useSmallIcons={useSmallIcons}
            poolsData={poolsData}
            optionsData={optionsData}
            setSelectedToken={setSelectedToken}
          />
        )}
        <Button w="full" h={{ base: 12, sm: 14 }} colorScheme="primary">
          Preview swaps &amp; fees
        </Button>
      </Box>
      <Text textAlign="center">
        Want this to run automatically every day? Use our{' '}
        <Link
          href="/"
          color={handleChangeColorModeValue(
            colorMode,
            'primary.500',
            'primary.300'
          )}
        >
          NPM module
        </Link>
      </Text>
    </Box>
  );
}
