import {
  Box,
  Button,
  Center,
  Checkbox,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function DisclaimerAgreementModalWindow() {
  const [checked, setChecked] = useState(false);
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius="lg"
      boxShadow={useColorModeValue(
        '0 0 2px rgba(0, 0, 0, 0.1), 0 1px 8px -1px rgba(0, 0, 0, 0.15)',
        '0 0 2px rgba(0, 0, 0, 0.45), 0 1px 14px -6px rgba(12, 12, 12, 0.9)'
      )}
      p={6}
    >
      <Heading as="h2" size="xl" mb={4}>
        Before you enter the lab...
      </Heading>
      <Box
        maxH={{ base: 'lg', md: 'xl' }}
        overflowY="scroll"
        bg={useColorModeValue('blackAlpha.50', 'blackAlpha.300')}
        borderRadius="xl"
        p={4}
        css={{
          // for firefox
          scrollbarWidth: 'none',
          // for chrome
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Text whiteSpace="pre-wrap">
          {`Osmosis is a decentralized peer-to-peer blockchain that people can use to create liquidity and trade IBC enabled tokens. The Osmosis blockchain is made up of free, public, and open-source software. Your use of Osmosis involves various risks, including, but not limited, to losses while digital assets are being supplied to Osmosis pools and losses due to the fluctuation of prices of tokens in a trading pair or liquidity pool, including Impermanence Loss. Before using any pool on the Osmosis blockchain, you should review the relevant documentation to make sure you understand how Osmosis works, and the pool you use on Osmosis works. Additionally, just as you can access email protocols, such as SMTP, through multiple email clients, you can access pools on Osmosis through several web or mobile interfaces. You are responsible for doing your own diligence on those interfaces to understand the fees and risks they present.\n\nAS DESCRIBED IN THE OSMOSIS LICENSES, THE OSMOSIS PROTOCOL IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. Although Osmosis Labs Pte. Ltd. ( “Osmosis Labs” ) developed much of the initial code for the Osmosis protocol, it does not provide, own, or control the Osmosis protocol, which is run by a decentralized validator set. Upgrades and modifications to the protocol are managed in a community-driven way by holders of the OSMO governance token. No developer or entity involved in creating the Osmosis protocol will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Osmosis protocol, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.`}
        </Text>
      </Box>
      <Center my={6}>
        <Checkbox onChange={(e) => setChecked(e.target.checked)}>
          I understand the risks and would like to proceed.
        </Checkbox>
      </Center>
      <Center>
        <Button
          w={{ base: 'full', md: 'inherit' }}
          h={12}
          px={8}
          colorScheme="primary"
          isDisabled={!checked}
        >
          Proceed
        </Button>
      </Center>
    </Box>
  );
}
