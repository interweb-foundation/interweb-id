import { asset_list } from '@chain-registry/osmosis';
import {
  Box,
  Button,
  Image,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import React from 'react';

const assetList = asset_list.assets.map(({ name, logo_URIs }) => ({
  chainName: name,
  logo: logo_URIs
}));

function exportData() {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(assetList)
  )}`;
  const link = document.createElement('a');
  link.href = jsonString;
  link.download = 'asset-list.json';

  link.click();
}

export const Assets = () => {
  return (
    <Stack spacing={8}>
      <Box mx="auto">
        <Button onClick={exportData}>Export Data</Button>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>name</Th>
            <Th>logo</Th>
            <Th>png</Th>
            <Th>svg</Th>
          </Tr>
        </Thead>
        {assetList.map(({ chainName, logo }) => (
          <Tbody>
            <Td>{chainName}</Td>
            <Td>
              <Box w={10} h={10}>
                <Image
                  src={logo.png || logo.svg}
                  fallbackSrc="https://dummyimage.com/600x600/ff0000/ffffff&text=Error"
                />
              </Box>
            </Td>
            <Td>
              <Stack>
                <Text>{logo.png}</Text>
              </Stack>
            </Td>
            <Td>
              <Stack>
                <Text>{logo.svg}</Text>
              </Stack>
            </Td>
          </Tbody>
        ))}
      </Table>
    </Stack>
  );
};
