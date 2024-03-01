import {
  Box,
  Checkbox,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorMode
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { OsmosisTokens } from '../../base-config';
import { handleChangeColorModeValue } from '../../default-component';

interface dataType {
  name: string;
  imgSrc: string;
  checked: boolean;
}

export default function () {
  const { colorMode } = useColorMode();
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    if (OsmosisTokens.length > 0) {
      const getDataArray = OsmosisTokens.map(({ name, imgSrc }) => ({
        name: name,
        imgSrc: imgSrc,
        checked: false
      }));
      setData(getDataArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box p={8}>
      <TableContainer
        bg={handleChangeColorModeValue(
          colorMode,
          'blackAlpha.50',
          'whiteAlpha.50'
        )}
        borderRadius="xl"
      >
        <Table variant="simple" colorScheme="whiteAlpha">
          <Thead>
            <Tr
              bg={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.100',
                'whiteAlpha.50'
              )}
            >
              <Th w={4} paddingInlineEnd={0} py={4}>
                <Flex justify="center" align="center">
                  <Checkbox
                    borderColor={handleChangeColorModeValue(
                      colorMode,
                      'blackAlpha.400',
                      'whiteAlpha.600'
                    )}
                    colorScheme="primary"
                    onChange={(e) =>
                      setData((pre) => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const arr = pre.map(({ checked, ...rest }) => {
                          return { ...rest, checked: e.target.checked };
                        });
                        return arr;
                      })
                    }
                  />
                </Flex>
              </Th>
              <Th py={4}>Asset / Chain</Th>
              <Th py={4} isNumeric={true}>
                Balance
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ name, imgSrc, checked }) => (
              <Tr key={name}>
                <Td w={4} paddingInlineEnd={0}>
                  <Flex justify="center" align="center">
                    <Checkbox
                      id={name}
                      value={name}
                      isChecked={checked}
                      borderColor={handleChangeColorModeValue(
                        colorMode,
                        'blackAlpha.300',
                        'whiteAlpha.500'
                      )}
                      colorScheme="primary"
                      onChange={(e) =>
                        setData((pre) => {
                          const newArr = pre.map(
                            ({
                              name: defaultName,
                              checked: defaultChecked,
                              ...rest
                            }) => {
                              if (defaultName === e.target.id) {
                                return {
                                  ...rest,
                                  name: defaultName,
                                  checked: e.target.checked
                                };
                              }
                              return {
                                ...rest,
                                name: defaultName,
                                checked: defaultChecked
                              };
                            }
                          );
                          return newArr;
                        })
                      }
                    />
                  </Flex>
                </Td>
                <Td>
                  <Flex align="center">
                    <Box w={{ base: 14, sm: 16 }} mr={4}>
                      <Image src={imgSrc} />
                    </Box>
                    <Text mr={4}>{name}</Text>
                  </Flex>
                </Td>
                <Td isNumeric={true}>
                  <Text fontWeight="semibold" mb={0.5}>
                    0.2186
                  </Text>
                  <Text opacity={0.7}>$1.86</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr
              bg={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.100',
                'whiteAlpha.50'
              )}
            >
              <Th w={4} paddingInlineEnd={0} py={4}>
                <Flex justify="center" align="center">
                  <Checkbox
                    borderColor={handleChangeColorModeValue(
                      colorMode,
                      'blackAlpha.400',
                      'whiteAlpha.600'
                    )}
                    colorScheme="primary"
                    onChange={(e) =>
                      setData((pre) => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const arr = pre.map(({ checked, ...rest }) => {
                          return { ...rest, checked: e.target.checked };
                        });
                        return arr;
                      })
                    }
                  />
                </Flex>
              </Th>
              <Th py={4}>Asset / Chain</Th>
              <Th py={4} isNumeric={true}>
                Balance
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
