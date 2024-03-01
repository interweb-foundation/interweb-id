import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { OsmosisTokens } from '../../base-config';

interface dataType {
  job: string;
  state: boolean;
  activity: string;
}

export default function () {
  const [data, setData] = useState<dataType[]>([]);
  const [keyValue, setKeyValue] = useState(0);

  useEffect(() => {
    const activities = ['SWAP', 'JOINPOOL', 'LOCKTOKENS'];
    const allActivities = [...Array(16)]
      .map(() => {
        return activities[(Math.random() * activities.length) | 0];
      })
      .sort((a, b) => a.length - b.length);
    const allTokens = OsmosisTokens.map(({ name }) => name);
    const fromTokens = [...Array(16)]
      .fill(undefined)
      .map((a, i) => {
        return allTokens[(a = i)];
      })
      .sort(() => Math.random() - 0.5);
    const toToken = allTokens
      .filter((a) => !fromTokens.includes(a))
      .splice(0, allActivities.filter((v) => v === 'SWAP').length);
    const allState = [...Array(16)].map(() => {
      return Boolean((Math.random() * 2) | 0);
    });
    const allJobs = allActivities.map((act, index) => {
      if (act === 'SWAP')
        return `Swap ${fromTokens[index]} for ${
          toToken[(Math.random() * toToken.length) | 0]
        }`;
      if (act === 'JOINPOOL')
        return `${fromTokens[index]} into pool #${(Math.random() * 17) | 0}`;
      if (act === 'LOCKTOKENS')
        return `${fromTokens[index]} for pool #${(Math.random() * 17) | 0}`;
      return 'loading...';
    });
    const getData = [...Array(16)]
      .map((v, i) => ({
        job: allJobs[i],
        state: allState[i],
        activity: allActivities[i]
      }))
      .sort(
        (a, b) =>
          a.activity.length - b.activity.length ||
          (b.state ? 1 : 0) - (a.state ? 1 : 0)
      );
    setData(getData);
  }, [keyValue]);

  return (
    <Box p={8}>
      <Box
        border="1px solid"
        borderColor={useColorModeValue('gray.100', 'whiteAlpha.100')}
        borderRadius="3xl"
        p={{ base: 6, sm: 8 }}
      >
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="xl" fontWeight="bold">
            Pending Jobs
          </Text>
          <Button
            size="sm"
            variant="outline"
            colorScheme="primary"
            borderRadius="full"
            px={4}
            onClick={() => setKeyValue(keyValue + 1)}
          >
            Run
          </Button>
        </Flex>
        <Stack mb={4}>
          {data.map(({ job, state, activity }, i) => {
            return (
              <Flex
                key={i}
                align="center"
                border="1px solid"
                borderColor={useColorModeValue('gray.100', 'whiteAlpha.100')}
                borderRadius="full"
                p={{ base: 2, sm: 4 }}
              >
                <Box
                  w={3}
                  h={3}
                  bg={
                    state
                      ? 'green.200'
                      : useColorModeValue('gray.200', 'whiteAlpha.400')
                  }
                  borderRadius="full"
                  mr={2}
                ></Box>
                <Flex justify="space-between" align="center" flex={1}>
                  <Text
                    color={useColorModeValue('gray.700', 'whiteAlpha.800')}
                    mr={4}
                  >
                    {job}
                  </Text>
                  <Text
                    color={useColorModeValue('gray.400', 'whiteAlpha.500')}
                    fontWeight="semibold"
                  >
                    {activity}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Stack>
      </Box>
      <Text textAlign="center">
        Want this to run automatically every day? Use our{' '}
        <Link href="/" color={useColorModeValue('primary.500', 'primary.300')}>
          NPM module
        </Link>
      </Text>
    </Box>
  );
}
