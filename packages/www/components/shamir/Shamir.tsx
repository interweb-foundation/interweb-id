import React, { useCallback, useState } from 'react';
import { Box, Flex, Stack, Text, Input, useToast } from '@chakra-ui/react';
import secrets from 'secrets.js-34r7h';
import { utf8ToHex, hexToUtf8 } from '@cosmology/core';

import TextSection from '../../component/TextSection';
import PlainButton from '../../component/PlainButton';
import InfoIcon from './InfoIcon';

const defaultShareCount = 6;
const defaultThreshold = 4;

const shareCountDescription = `
In Shamir secret sharing, the "share count" represents the total number of shares generated when a secret is divided. Each share contains a unique piece of information, and the more shares created, the greater the level of redundancy and fault tolerance in the system, making it more resilient against data loss or compromise.
`;

const thresholdDescription = `
In Shamir secret sharing, the "threshold" refers to the minimum number of shares required to reconstruct a secret. It ensures that multiple individuals need to collaborate and combine their shares to reveal the original secret, adding an extra layer of security.
`;


export const ShamirComponent = () => {
  const toast = useToast();

  const [secretStr, setSecretStr] = useState('');
  const [shares, setShares] = useState<string[]>([]);
  const [shareCount, setShareCount] = useState<number>(defaultShareCount);
  const [threshold, setThreshold] = useState<number>(defaultThreshold);

  const handleSplit = useCallback(() => {
    if (secretStr && shareCount > 0 && threshold > 0) {
      try {
        const shares = secrets.share(utf8ToHex(secretStr), shareCount, threshold);
        setShares(shares);
      } catch ({ message }) {
        toast({
          position: 'top',
          status: 'error',
          title: `${message}`,
        })
      }
    }
  }, [secretStr, shareCount, threshold, toast]);

  const handleCombine = useCallback(() => {
    try {
      const combined = hexToUtf8(secrets.combine(shares));
      setSecretStr((combined));
    } catch ({ message }) {
      toast({
        position: 'top',
        status: 'error',
        title: `${message}`,
      })
    }
  }, [shares, toast]);

  return (
    <Flex direction='column'>
      <Box p={5} fontSize='24px' fontWeight='bold'>
        Shamir Secret Sharing
      </Box>
      <Flex flex={1} p={5} pt={0} gap={5}>
        <Flex direction='column' gap={7} w='40%' border='1px solid #eee' borderRadius='md' p={5}>
          <TextSection
            label='Secret'
            rows={10}
            value={secretStr}
            mode='public'
            onChange={setSecretStr}
          />
          <Flex gap={5}>
            <Stack flex={1} direction='row' alignItems='center'>
              <Text>share count <InfoIcon content={shareCountDescription} /> : </Text>
              <Input
                type='number'
                size='sm'
                w='60px'
                value={shareCount}
                onChange={(e) => setShareCount(parseInt(e.target.value, 10))}
              />
            </Stack>
            <Stack flex={1} direction='row' alignItems='center'>
              <Text>threshold <InfoIcon content={thresholdDescription} /> : </Text>
              <Input
                type='number'
                size='sm'
                w='60px'
                value={threshold}
                onChange={(e) => setThreshold(parseInt(e.target.value, 10))}
              />
            </Stack>
          </Flex>
        </Flex>
        <Flex w='10%' direction='column' gap={10} alignItems="center" justifyContent='center'>
          <PlainButton label='Split >>' onClick={handleSplit} />
          <PlainButton label='<< Combine' onClick={handleCombine} />
        </Flex>
        <Flex direction='column' gap={7} w='50%' border='1px solid #eee' borderRadius='md' p={5}>
          <TextSection
            label='Shares'
            rows={20}
            mode='public'
            value={shares.join('\n')}
            onChange={(value) => setShares(value.trim().split('\n'))}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}