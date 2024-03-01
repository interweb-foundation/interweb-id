import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import {
  DefaultCard,
  handleChangeColorModeValue
} from '../../default-component';
import {
  AssetsDataType,
  AssetsHeaderType,
  DisplayChainsType,
  TotalDataType
} from '../../types';
import { CopyAddressButton } from '../wallet/CopyAddressButton';

export const TotalCard = ({ title, content, claimLink }: TotalDataType) => {
  const { colorMode } = useColorMode();
  return (
    <DefaultCard title={title}>
      <Stack isInline={true} flexWrap="wrap" alignItems="end" spacing={4}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing="wide"
          color={handleChangeColorModeValue(
            colorMode,
            'primary.500',
            'primary.200'
          )}
        >
          {content}
        </Text>
        <Box pb={2}>{claimLink}</Box>
      </Stack>
    </DefaultCard>
  );
};

export const DisplayChainRow = ({
  chainName,
  imgSrc,
  apr,
  address,
  website,
  explorer,
  stakeLink,
  voteLink,
  dashboardLink
}: DisplayChainsType) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Grid
        w="full"
        h="full"
        templateColumns={{
          lg: 'minmax(14rem, 28rem) 1fr 1fr'
        }}
        alignItems="center"
        gap={6}
      >
        <GridItem>
          <Grid
            templateColumns="2.5rem minmax(4rem, 1fr) 2.5rem 2.5rem"
            alignItems="center"
            gap={2}
          >
            <GridItem>
              <Box
                w={10}
                h={10}
                minW={10}
                minH={10}
                maxW={10}
                maxH={10}
                borderRadius="full"
                border="1px solid"
                borderColor={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.200',
                  'whiteAlpha.200'
                )}
                overflow="hidden"
              >
                <Image src={imgSrc} />
              </Box>
            </GridItem>
            <GridItem>
              <Text fontSize="lg" fontWeight="semibold">
                {chainName}
              </Text>
            </GridItem>
            <GridItem>{website}</GridItem>
            <GridItem>{explorer}</GridItem>
            {address && (
              <GridItem colSpan={4}>
                <CopyAddressButton address={address} isRound={true} />
              </GridItem>
            )}
          </Grid>
        </GridItem>
        <GridItem px={{ lg: 6 }}>
          <Flex
            justifyContent={{ base: 'space-between', lg: 'end' }}
            alignItems="center"
            fontSize="lg"
            fontWeight="medium"
          >
            <Text mr={4}>APR</Text>
            <Text>{apr}</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDirection={{ base: 'column', md: 'row' }} flexWrap="wrap">
            <Box flex={1} p={1}>
              {stakeLink}
            </Box>
            <Box flex={1} p={1}>
              {voteLink}
            </Box>
            <Box flex={1} p={1}>
              {dashboardLink}
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      <Box mx={-6} py={6} _last={{ display: 'none' }}>
        <Divider />
      </Box>
    </>
  );
};

export const DisplayListHeader = ({
  header
}: {
  header: AssetsHeaderType[];
}) => {
  const { colorMode } = useColorMode();
  return (
    <Grid
      templateColumns={{
        lg: 'minmax(12rem, 28rem) repeat(3, minmax(5rem, 16rem)) minmax(4rem, 8rem) minmax(8rem, 14rem)'
      }}
      gap={2}
      alignItems="center"
      bg={handleChangeColorModeValue(
        colorMode,
        'blackAlpha.100',
        'whiteAlpha.100'
      )}
      px={6}
      py={3}
    >
      {header.map(({ title, chakraGridItemStyle }, i) => (
        <GridItem key={`${title}${i}`} {...chakraGridItemStyle}>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color={handleChangeColorModeValue(
              colorMode,
              'blackAlpha.700',
              'whiteAlpha.700'
            )}
          >
            {title}
          </Text>
        </GridItem>
      ))}
    </Grid>
  );
};

export const DisplayAssetChainRow = ({
  chainName,
  imgSrc,
  address,
  availableBalance,
  stakedBalance,
  claimableRewards,
  apr,
  website,
  explorer,
  stakeLink,
  voteLink,
  dashboardLink
}: AssetsDataType) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Grid
        templateColumns={{
          base: '1fr 1fr',
          lg: 'minmax(12rem, 28rem) repeat(3, minmax(5rem, 16rem)) minmax(4rem, 8rem) minmax(8rem, 14rem)'
        }}
        alignItems={{ lg: 'center' }}
        gap={{ base: 4, lg: 2 }}
      >
        <GridItem colSpan={{ base: 2, lg: 1 }} pr={{ lg: 4 }}>
          <Grid
            templateColumns="2.5rem minmax(3rem, 1fr) 2.5rem 2.5rem"
            alignItems="center"
            gap={2}
          >
            <GridItem>
              <Box
                w={10}
                h={10}
                minW={10}
                minH={10}
                maxW={10}
                maxH={10}
                borderRadius="full"
                border="1px solid"
                borderColor={handleChangeColorModeValue(
                  colorMode,
                  'blackAlpha.200',
                  'whiteAlpha.200'
                )}
                overflow="hidden"
              >
                <Image src={imgSrc} />
              </Box>
            </GridItem>
            <GridItem>
              <Text fontSize="lg" fontWeight="semibold">
                {chainName}
              </Text>
            </GridItem>
            <GridItem>{website}</GridItem>
            <GridItem>{explorer}</GridItem>
            <GridItem colSpan={4}>
              <CopyAddressButton address={address} isRound={true} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem pl={{ lg: 3 }}>
          <Box display={{ lg: 'none' }}>
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.800',
                'whiteAlpha.700'
              )}
            >
              {availableBalance.header}
            </Text>
          </Box>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={handleChangeColorModeValue(
              colorMode,
              'primary.500',
              'primary.200'
            )}
          >
            {availableBalance.fiatValue}
          </Text>
          <Text
            fontSize="md"
            fontWeight="medium"
            color={handleChangeColorModeValue(
              colorMode,
              'gray.600',
              'gray.400'
            )}
          >
            {availableBalance.appValue}
          </Text>
        </GridItem>
        <GridItem pl={{ lg: 3 }}>
          <Box display={{ lg: 'none' }}>
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.800',
                'whiteAlpha.700'
              )}
            >
              {stakedBalance.header}
            </Text>
          </Box>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={handleChangeColorModeValue(
              colorMode,
              'primary.500',
              'primary.200'
            )}
          >
            {stakedBalance.fiatValue}
          </Text>
          <Text
            fontSize="md"
            fontWeight="medium"
            color={handleChangeColorModeValue(
              colorMode,
              'gray.600',
              'gray.400'
            )}
          >
            {stakedBalance.appValue}
          </Text>
        </GridItem>
        <GridItem pl={{ lg: 3 }}>
          <Box display={{ lg: 'none' }}>
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.800',
                'whiteAlpha.700'
              )}
            >
              {claimableRewards.header}
            </Text>
          </Box>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={handleChangeColorModeValue(
              colorMode,
              'primary.500',
              'primary.200'
            )}
          >
            {claimableRewards.fiatValue}
          </Text>
          <Text
            fontSize="md"
            fontWeight="medium"
            color={handleChangeColorModeValue(
              colorMode,
              'gray.600',
              'gray.400'
            )}
          >
            {claimableRewards.appValue}
          </Text>
        </GridItem>
        <GridItem pr={{ lg: 3 }}>
          <Box display={{ lg: 'none' }}>
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={handleChangeColorModeValue(
                colorMode,
                'blackAlpha.800',
                'whiteAlpha.700'
              )}
            >
              {apr.header}
            </Text>
          </Box>
          <Text
            fontSize="xl"
            fontWeight="medium"
            textAlign={{ lg: 'end' }}
            color={handleChangeColorModeValue(
              colorMode,
              'gray.600',
              'gray.300'
            )}
          >
            {apr.value}
          </Text>
        </GridItem>
        <GridItem w="full" colSpan={{ base: 2, lg: 1 }} pl={{ lg: 4 }}>
          <Flex flexDirection={{ base: 'column', md: 'row' }} flexWrap="wrap">
            <Box flex={1} p={1}>
              {stakeLink}
            </Box>
            <Box flex={1} p={1}>
              {voteLink}
            </Box>
            <Box flex={{ base: 1, lg: 2 }} p={1}>
              {dashboardLink}
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      <Box mx={-6} py={6} _last={{ display: 'none' }}>
        <Divider />
      </Box>
    </>
  );
};

export const AssetList = ({
  total,
  currentAsset,
  allChains
}: {
  total: ReactNode;
  currentAsset?: ReactNode;
  allChains: ReactNode;
}) => {
  return (
    <Stack spacing={8}>
      {total}
      {currentAsset}
      {allChains}
    </Stack>
  );
};
