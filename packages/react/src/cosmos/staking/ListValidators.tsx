import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Stack,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted
} from 'react-icons/ti';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface activeValidatorsType {
  rank: number;
  image: string;
  name: string;
  allVoting: string;
  votingPercent: string;
  allCumulativeShare: string;
  cumulativeShareLeft: string;
  cumulativeShareRight: string;
  participation: string;
  uptime: string;
  commission: string;
}

interface sortButtonType {
  id: string;
  order: string;
}

const ActiveValidatorsTable = ({
  tagSize,
  activeData,
  activeSortButton,
  setActiveSortButton
}: {
  tagSize: string;
  activeData: activeValidatorsType[];
  activeSortButton: sortButtonType;
  setActiveSortButton: ({ id, order }: sortButtonType) => void;
}) => {
  const { colorMode } = useColorMode();
  return (
    <TableContainer boxShadow="md">
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>
              <Text textTransform="capitalize" textAlign="center">
                Rank
              </Text>
            </Th>
            <Th>
              <Flex
                as="button"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'name',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Validators</Text>
                <Icon
                  as={
                    activeSortButton.id === 'name' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'name' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th>
              <Flex
                as="button"
                w="full"
                justify="end"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'allVoting',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Voting Power</Text>
                <Icon
                  as={
                    activeSortButton.id === 'allVoting' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'allVoting' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th>
              <Text textTransform="capitalize" textAlign="end">
                Cumulative Share
              </Text>
            </Th>
            <Th>
              <Flex
                as="button"
                w="full"
                justify="end"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'participation',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Participation</Text>
                <Icon
                  as={
                    activeSortButton.id === 'participation' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'participation' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th>
              <Flex
                as="button"
                w="full"
                justify="end"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'uptime',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Uptime</Text>
                <Icon
                  as={
                    activeSortButton.id === 'uptime' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'uptime' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th>
              <Flex
                as="button"
                w="full"
                justify="end"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'commission',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Commission</Text>
                <Icon
                  as={
                    activeSortButton.id === 'commission' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'commission' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {activeData.map(
            ({
              rank,
              image,
              name,
              allVoting,
              votingPercent,
              allCumulativeShare,
              cumulativeShareLeft,
              cumulativeShareRight,
              participation,
              uptime,
              commission
            }) => {
              return (
                <Tr>
                  <Td>
                    <Flex justify="center">
                      <Flex
                        w={8}
                        h={8}
                        justify="center"
                        align="center"
                        borderRadius="full"
                        bg={
                          rank <= 10
                            ? handleChangeColorModeValue(
                                colorMode,
                                'primary.500',
                                'primary.300'
                              )
                            : handleChangeColorModeValue(
                                colorMode,
                                'blackAlpha.50',
                                'whiteAlpha.100'
                              )
                        }
                        color={
                          rank <= 10
                            ? handleChangeColorModeValue(
                                colorMode,
                                'whiteAlpha.900',
                                'whiteAlpha.800'
                              )
                            : handleChangeColorModeValue(
                                colorMode,
                                'blackAlpha.700',
                                'whiteAlpha.700'
                              )
                        }
                        p={2}
                      >
                        <Text>{rank}</Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Stack isInline={true} alignItems="center" spacing={4}>
                      <Box
                        border="1px solid"
                        borderColor={handleChangeColorModeValue(
                          colorMode,
                          'blackAlpha.50',
                          'whiteAlpha.50'
                        )}
                        borderRadius="full"
                        w={{ base: 12, md: 14 }}
                        h={{ base: 12, md: 14 }}
                        minW={{ base: 12, md: 14 }}
                        minH={{ base: 12, md: 14 }}
                        maxW={{ base: 12, md: 14 }}
                        maxH={{ base: 12, md: 14 }}
                        overflow="hidden"
                      >
                        <Image src={image} />
                      </Box>
                      <Text fontWeight="semibold">{name}</Text>
                    </Stack>
                  </Td>
                  <Td isNumeric={true}>
                    <Text fontWeight="medium" mb={1}>
                      {parseInt(allVoting).toLocaleString()}
                    </Text>
                    <Text>{votingPercent}%</Text>
                  </Td>
                  <Td
                    position="relative"
                    borderLeft="1px Solid"
                    borderRight="1px Solid"
                    borderLeftColor={handleChangeColorModeValue(
                      colorMode,
                      'gray.50',
                      'gray.700'
                    )}
                    borderRightColor={handleChangeColorModeValue(
                      colorMode,
                      'gray.50',
                      'gray.700'
                    )}
                  >
                    <Flex
                      position="absolute"
                      top={0}
                      left={0}
                      zIndex={5}
                      w="100%"
                      h="100%"
                    >
                      <Box
                        w={`${cumulativeShareLeft}%`}
                        top={0}
                        bottom={0}
                        bg={handleChangeColorModeValue(
                          colorMode,
                          'primary.300',
                          'primary.100'
                        )}
                        opacity={0.3}
                      ></Box>
                      <Box
                        w={`${cumulativeShareRight}%`}
                        bg={handleChangeColorModeValue(
                          colorMode,
                          'primary.500',
                          'primary.300'
                        )}
                        opacity={0.3}
                      ></Box>
                    </Flex>
                    <Text zIndex={15} textAlign="end">
                      {allCumulativeShare}%
                    </Text>
                  </Td>
                  <Td isNumeric={true}>
                    <Tag
                      size={tagSize}
                      borderRadius="full"
                      variant="solid"
                      colorScheme={
                        parseInt(participation) > 20 ? 'green' : 'gray'
                      }
                    >
                      <TagLabel>{participation} / 28</TagLabel>
                    </Tag>
                  </Td>
                  <Td isNumeric={true}>{uptime}</Td>
                  <Td isNumeric={true}>{commission}%</Td>
                  <Td>
                    <Link
                      href="#"
                      color={handleChangeColorModeValue(
                        colorMode,
                        'primary.700',
                        'primary.300'
                      )}
                    >
                      <Flex justify="center" align="center">
                        <Text mr={0.5}>Manage</Text>
                        <Icon as={FiChevronRight} />
                      </Flex>
                    </Link>
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const InactiveValidators = ({
  tagSize,
  inactiveData,
  activeSortButton,
  setActiveSortButton
}: {
  tagSize: string;
  inactiveData: activeValidatorsType[];
  activeSortButton: sortButtonType;
  setActiveSortButton: ({ id, order }: sortButtonType) => void;
}) => {
  const { colorMode } = useColorMode();
  return (
    <TableContainer boxShadow="md">
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>
              <Text textTransform="capitalize" textAlign="center">
                Rank
              </Text>
            </Th>
            <Th>
              <Flex
                as="button"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'name',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Validators</Text>
                <Icon
                  as={
                    activeSortButton.id === 'name' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'name' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th>
              <Flex
                as="button"
                w="full"
                justify="end"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'allVoting',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Voting Power</Text>
                <Icon
                  as={
                    activeSortButton.id === 'allVoting' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'allVoting' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th>
              <Text textTransform="capitalize" textAlign="end">
                Cumulative Share
              </Text>
            </Th>
            <Th>
              <Flex
                as="button"
                w="full"
                justify="end"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'participation',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Participation</Text>
                <Icon
                  as={
                    activeSortButton.id === 'participation' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'participation' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th>
              <Flex
                as="button"
                w="full"
                justify="end"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'uptime',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Uptime</Text>
                <Icon
                  as={
                    activeSortButton.id === 'uptime' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'uptime' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th>
              <Flex
                as="button"
                w="full"
                justify="end"
                align="center"
                fontWeight="inherit"
                onClick={() =>
                  setActiveSortButton({
                    id: 'commission',
                    order: activeSortButton.order === 'asc' ? 'desc' : 'asc'
                  })
                }
              >
                <Text>Commission</Text>
                <Icon
                  as={
                    activeSortButton.id === 'commission' &&
                    activeSortButton.order === 'asc'
                      ? TiArrowSortedUp
                      : activeSortButton.id === 'commission' &&
                        activeSortButton.order === 'desc'
                      ? TiArrowSortedDown
                      : TiArrowUnsorted
                  }
                />
              </Flex>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {inactiveData.map(
            ({
              rank,
              image,
              name,
              allVoting,
              votingPercent,
              allCumulativeShare,
              cumulativeShareLeft,
              cumulativeShareRight,
              participation,
              uptime,
              commission
            }) => {
              return (
                <Tr>
                  <Td>
                    <Flex justify="center">
                      <Flex
                        w={8}
                        h={8}
                        justify="center"
                        align="center"
                        borderRadius="full"
                        bg={
                          rank <= 10
                            ? handleChangeColorModeValue(
                                colorMode,
                                'primary.500',
                                'primary.300'
                              )
                            : handleChangeColorModeValue(
                                colorMode,
                                'blackAlpha.50',
                                'whiteAlpha.100'
                              )
                        }
                        color={
                          rank <= 10
                            ? handleChangeColorModeValue(
                                colorMode,
                                'whiteAlpha.900',
                                'whiteAlpha.800'
                              )
                            : handleChangeColorModeValue(
                                colorMode,
                                'blackAlpha.700',
                                'whiteAlpha.700'
                              )
                        }
                        p={2}
                      >
                        <Text>{rank}</Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Stack isInline={true} alignItems="center" spacing={4}>
                      <Box
                        border="1px solid"
                        borderColor={handleChangeColorModeValue(
                          colorMode,
                          'blackAlpha.50',
                          'whiteAlpha.50'
                        )}
                        borderRadius="full"
                        w={{ base: 12, md: 14 }}
                        h={{ base: 12, md: 14 }}
                        minW={{ base: 12, md: 14 }}
                        minH={{ base: 12, md: 14 }}
                        maxW={{ base: 12, md: 14 }}
                        maxH={{ base: 12, md: 14 }}
                        overflow="hidden"
                      >
                        <Image src={image} />
                      </Box>
                      <Text fontWeight="semibold">{name}</Text>
                      <Tag
                        display={allVoting === '0' ? 'flex' : 'none'}
                        colorScheme="red"
                      >
                        Jailed
                      </Tag>
                    </Stack>
                  </Td>
                  <Td isNumeric={true}>
                    <Text fontWeight="medium" mb={1}>
                      {parseInt(allVoting).toLocaleString()}
                    </Text>
                    <Text>{votingPercent}%</Text>
                  </Td>
                  <Td
                    position="relative"
                    borderLeft="1px Solid"
                    borderRight="1px Solid"
                    borderLeftColor={handleChangeColorModeValue(
                      colorMode,
                      'gray.50',
                      'gray.700'
                    )}
                    borderRightColor={handleChangeColorModeValue(
                      colorMode,
                      'gray.50',
                      'gray.700'
                    )}
                  >
                    <Flex
                      position="absolute"
                      top={0}
                      left={0}
                      zIndex={5}
                      w="100%"
                      h="100%"
                    >
                      <Box
                        w={`${cumulativeShareLeft}%`}
                        top={0}
                        bottom={0}
                        bg={handleChangeColorModeValue(
                          colorMode,
                          'primary.300',
                          'primary.100'
                        )}
                        opacity={0.3}
                      ></Box>
                      <Box
                        w={`${cumulativeShareRight}%`}
                        bg={handleChangeColorModeValue(
                          colorMode,
                          'primary.500',
                          'primary.300'
                        )}
                        opacity={0.3}
                      ></Box>
                    </Flex>
                    <Text zIndex={15} textAlign="end">
                      {allCumulativeShare}%
                    </Text>
                  </Td>
                  <Td isNumeric={true}>
                    <Tag
                      size={tagSize}
                      borderRadius="full"
                      variant="solid"
                      colorScheme={
                        parseInt(participation) > 20 ? 'green' : 'gray'
                      }
                    >
                      <TagLabel>{participation} / 28</TagLabel>
                    </Tag>
                  </Td>
                  <Td isNumeric={true}>{uptime}</Td>
                  <Td isNumeric={true}>{commission}%</Td>
                  <Td>
                    <Link
                      href="#"
                      color={handleChangeColorModeValue(
                        colorMode,
                        'primary.700',
                        'primary.300'
                      )}
                    >
                      <Flex justify="center" align="center">
                        <Text mr={0.5}>Manage</Text>
                        <Icon as={FiChevronRight} />
                      </Flex>
                    </Link>
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default function ListValidators() {
  const { colorMode } = useColorMode();
  const [activeData, setActiveData] = useState<activeValidatorsType[]>([
    {
      rank: 0,
      image: '',
      name: '',
      allVoting: '',
      votingPercent: '',
      allCumulativeShare: '',
      cumulativeShareLeft: '',
      cumulativeShareRight: '',
      participation: '',
      uptime: '',
      commission: ''
    }
  ]);
  const [inactiveData, setInactiveData] = useState<activeValidatorsType[]>([
    {
      rank: 0,
      image: '',
      name: '',
      allVoting: '',
      votingPercent: '',
      allCumulativeShare: '',
      cumulativeShareLeft: '',
      cumulativeShareRight: '',
      participation: '',
      uptime: '',
      commission: ''
    }
  ]);
  const [activeSortButton, setActiveSortButton] = useState<sortButtonType>({
    id: '',
    order: ''
  });
  const [tabIndex, setTabIndex] = useState(0);
  const tagSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const allTokens = OsmosisTokens.map(({ name, imgSrc }) => ({
    name: name,
    image: imgSrc
  }));
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
    for (let i = 1; i < n; i++) {
      const calcMax = max - calcVal;
      const randomNumber = Math.random() * (calcMax - min) + min;
      setArr.push(randomNumber.toFixed(2));
      calcVal += randomNumber;
    }
    setArr.push((max - calcVal).toFixed(2));

    return setArr;
  };

  useEffect(() => {
    const getActiveData = getShuffledArr(allTokens)
      .map(({ name, image }) => {
        const allCumulativeShare = (
          parseFloat(
            getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .replaceAll(',', '')
          ) / 100000000
        ).toFixed(2);
        const cumulativeSharePercent = randGenerator(
          2,
          0.001,
          parseFloat(allCumulativeShare)
        ).sort(function (a, b) {
          return b - a;
        });
        return {
          name: name,
          image: image,
          allVoting: parseInt(
            getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .replaceAll(',', '')
          ).toFixed(0),
          votingPercent: (
            parseFloat(
              getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                .toString()
                .replaceAll(',', '')
            ) / 1000000000
          ).toFixed(2),
          allCumulativeShare: allCumulativeShare,
          cumulativeShareLeft: cumulativeSharePercent[0],
          cumulativeShareRight: cumulativeSharePercent[1],
          participation: Math.floor(Math.random() * 28).toFixed(0),
          uptime: '100%',
          commission: (
            parseFloat(
              getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                .toString()
                .replaceAll(',', '')
            ) / 1000000000
          ).toFixed(2)
        };
      })
      .sort(function (a, b) {
        return parseInt(b.allVoting) - parseInt(a.allVoting);
      })
      .map((data, i) => ({
        ...data,
        rank: i + 1
      }));
    const randomFailed = Math.floor(Math.random() * allTokens.length);
    const getInactiveData = getShuffledArr(allTokens)
      .map(({ name, image }, i) => {
        const allCumulativeShare = (
          parseFloat(
            getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
              .toString()
              .replaceAll(',', '')
              .slice(0, 2)
          ) / 100
        ).toFixed(2);
        const cumulativeSharePercent = randGenerator(
          2,
          0.001,
          parseFloat(allCumulativeShare)
        ).sort(function (a, b) {
          return b - a;
        });
        return {
          name: name,
          image: image,
          allVoting:
            i === randomFailed
              ? '0'
              : parseInt(
                  getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                    .toString()
                    .replaceAll(',', '')
                    .slice(0, 4)
                ).toFixed(0),
          votingPercent:
            i === randomFailed
              ? '0.00'
              : (
                  parseFloat(
                    getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                      .toString()
                      .replaceAll(',', '')
                      .slice(0, 2)
                  ) / 100
                ).toFixed(2),
          allCumulativeShare: i === randomFailed ? '0.00' : allCumulativeShare,
          cumulativeShareLeft:
            i === randomFailed ? '0' : cumulativeSharePercent[0],
          cumulativeShareRight:
            i === randomFailed ? '0' : cumulativeSharePercent[1],
          participation:
            i === randomFailed
              ? '0'
              : Math.floor(Math.random() * 20).toFixed(0),
          uptime: '0%',
          commission: i === randomFailed ? '0.00' : Math.random().toFixed(2)
        };
      })
      .sort(function (a, b) {
        return parseInt(b.allVoting) - parseInt(a.allVoting);
      })
      .map((data, i) => ({
        ...data,
        rank: getActiveData.length + 1 + i
      }));

    setActiveData(getActiveData);
    setInactiveData(getInactiveData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeSortButton.id !== '') {
      const sortDataFn = (dataArr) => {
        return dataArr.sort((a, b) => {
          if (a[activeSortButton.id] === null) return 1;
          if (b[activeSortButton.id] === null) return -1;
          if (
            a[activeSortButton.id] === null &&
            b[activeSortButton.id] === null
          )
            return 0;
          return (
            a[activeSortButton.id]
              .toString()
              .localeCompare(b[activeSortButton.id].toString(), 'en', {
                numeric: true
              }) * (activeSortButton.order === 'asc' ? 1 : -1)
          );
        });
      };
      if (activeData[0].name !== '') {
        const getSortActive = sortDataFn([...activeData]);
        setActiveData(getSortActive);
      }
      if (inactiveData[0].name !== '') {
        const getSortInactive = sortDataFn([...inactiveData]);
        setInactiveData(getSortInactive);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSortButton, tabIndex]);

  return (
    <Box p={4}>
      <Tabs
        size="md"
        variant="enclosed"
        onChange={(index) => {
          // setActiveSortButton({ id: "", order: "" });
          setTabIndex(index);
        }}
      >
        <TabList>
          <Tab
            fontWeight="medium"
            px={6}
            _selected={{
              bg: handleChangeColorModeValue(
                colorMode,
                'blackAlpha.100',
                'whiteAlpha.50'
              )
            }}
            _focus={{ outline: 'none' }}
          >
            Active Validators
          </Tab>
          <Tab
            fontWeight="medium"
            px={6}
            _selected={{
              bg: handleChangeColorModeValue(
                colorMode,
                'blackAlpha.100',
                'whiteAlpha.50'
              )
            }}
            _focus={{ outline: 'none' }}
          >
            Inactive Validators
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel py={2} px={0}>
            <ActiveValidatorsTable
              tagSize={tagSize}
              activeData={activeData}
              activeSortButton={activeSortButton}
              setActiveSortButton={setActiveSortButton}
            />
          </TabPanel>
          <TabPanel py={2} px={0}>
            <InactiveValidators
              tagSize={tagSize}
              inactiveData={inactiveData}
              activeSortButton={activeSortButton}
              setActiveSortButton={setActiveSortButton}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
