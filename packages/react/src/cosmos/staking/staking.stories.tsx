import { Box, Button, Flex, Grid, Icon, Text } from '@chakra-ui/react';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { ReactNode, useEffect, useState } from 'react';
import { FaWpexplorer } from 'react-icons/fa';
import { HiGlobe } from 'react-icons/hi';
import { IoChevronDown, IoChevronForwardOutline } from 'react-icons/io5';

import { OsmosisTokens } from '../../base-config';
import {
  DefaultCard,
  DefaultIconButton,
  DefaultLink,
  ListLinkButton,
  TextWithIconLink
} from '../../default-component';
import {
  AssetsHeaderType,
  DisplayChainsType,
  TotalDataType
} from '../../types';
import {
  AssetList,
  DisplayAssetChainRow,
  DisplayChainRow,
  DisplayListHeader,
  TotalCard
} from './AssetList';
import ChooseValidators from './ChooseValidators';
import Claim from './Claim';
import Delegate from './Delegate';
import ListValidators from './ListValidators';
import Redelegate from './Redelegate';
import Undelegate from './Undelegate';

const allTokens = OsmosisTokens.map(({ name, imgSrc }) => ({
  name: name,
  image: imgSrc
}));
const defaultArray = [
  ...'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
  ...'abcdefghijklmnopqrstuvwxyz'.split(''),
  ...'0123456789'.split('')
];
// eslint-disable-next-line
const getShuffledArr = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
};
const getRandomLetter = (name: string) => {
  const randomLetter = getShuffledArr(defaultArray)
    .toString()
    .replaceAll(',', '')
    .slice(0, 32);
  return name.replaceAll(/[\-[\s[\.]/g, "") + randomLetter; // eslint-disable-line
};

storiesOf('Cosmology/staking', module).add('AssetList', () => {
  // storybook knobs
  const connectedWallet = boolean('connect wallet', false);

  // data
  const defaultTotalData = [
    { title: 'Total Balance', content: '$0' },
    {
      title: 'Total Claimable Rewards',
      content: '$0',
      claimLink: (
        <DefaultLink href="#Claim">
          <TextWithIconLink text="Claim" icon={IoChevronForwardOutline} />
        </DefaultLink>
      )
    }
  ];
  const defaultAssetsHeader: AssetsHeaderType[] = [
    { title: 'Chain / Wallet Address' },
    { title: 'Available Balance', chakraGridItemStyle: { px: 3 } },
    { title: 'Staked Amount', chakraGridItemStyle: { px: 3 } },
    { title: 'Claimable Rewards', chakraGridItemStyle: { px: 3 } },
    { title: 'APR', chakraGridItemStyle: { textAlign: 'end', px: 4 } },
    { title: '' }
  ];
  const [totalData, setTotalData] = useState<TotalDataType[]>(defaultTotalData);
  const [totalComponents, setTotalComponents] = useState<ReactNode>();
  const [showAllChains, setShowAllChains] = useState(false);
  const [currentAssetComponents, setCurrentAssetComponents] =
    useState<ReactNode>();
  const [allChainsComponents, setAllChainsComponents] = useState<ReactNode>();
  const [allChainsData, setAllChainsData] = useState<DisplayChainsType[]>();

  useEffect(() => {
    if (connectedWallet) {
      const getCurrentChainsData = getShuffledArr(allTokens)
        .slice(0, Math.floor(Math.random() * 5 + 1))
        .map(({ name, image }) => ({
          chainId: getRandomLetter(name),
          chainName: name,
          imgSrc: image,
          address: getRandomLetter(name),
          availableBalance: {
            header: 'Available Balance',
            fiatValue:
              '$' +
              (
                parseFloat(
                  getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                    .toString()
                    .replaceAll(',', '')
                ) / 100000000
              ).toFixed(2),
            appValue: `${(
              parseFloat(
                getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .toString()
                  .replaceAll(',', '')
              ) / 100000000
            ).toFixed(2)} ${name}`
          },
          stakedBalance: {
            header: 'Staked Amount',
            fiatValue:
              '$' +
              (
                parseFloat(
                  getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                    .toString()
                    .replaceAll(',', '')
                ) / 100000000
              ).toFixed(2),
            appValue: `${(
              parseFloat(
                getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .toString()
                  .replaceAll(',', '')
              ) / 100000000
            ).toFixed(2)} ${name}`
          },
          claimableRewards: {
            header: 'Claimable Rewards',
            fiatValue:
              '$' +
              (
                parseFloat(
                  getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                    .toString()
                    .replaceAll(',', '')
                ) / 100000000
              ).toFixed(2),
            appValue: `${(
              parseFloat(
                getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .toString()
                  .replaceAll(',', '')
              ) / 100000000
            ).toFixed(2)} ${name}`
          },
          apr: {
            header: 'APR',
            value:
              (
                parseFloat(
                  getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                    .toString()
                    .replaceAll(',', '')
                ) / 100000000
              ).toFixed(2) + '%'
          },
          website: (
            <DefaultLink href="#website">
              <DefaultIconButton
                icon={HiGlobe}
                label="website"
                showTooltip={true}
              />
            </DefaultLink>
          ),
          explorer: (
            <DefaultLink href="#explorer">
              <DefaultIconButton
                icon={FaWpexplorer}
                label="website"
                showTooltip={true}
              />
            </DefaultLink>
          ),
          stakeLink: (
            <DefaultLink href="#chain_stake">
              <ListLinkButton text="Stack" />
            </DefaultLink>
          ),
          voteLink: (
            <DefaultLink href="#chain_vote">
              <ListLinkButton text="Vote" />
            </DefaultLink>
          ),
          dashboardLink: (
            <DefaultLink href="#chain_dashboard">
              <ListLinkButton text="Dashboard" />
            </DefaultLink>
          )
        }));
      const getChainsFilter = getShuffledArr(
        allTokens.filter(
          ({ name }) =>
            !getCurrentChainsData.some(({ chainName }) => name === chainName)
        )
      );
      const getOtherChainsDate = getShuffledArr(
        getChainsFilter.map(({ name, image }) => {
          return {
            chainName: name,
            imgSrc: image,
            apr: `${(
              parseFloat(
                getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .toString()
                  .replaceAll(',', '')
              ) / 100000000
            ).toFixed(2)}%`,
            address: getRandomLetter(name),
            website: (
              <DefaultLink href="#website">
                <DefaultIconButton
                  icon={HiGlobe}
                  label="website"
                  showTooltip={true}
                />
              </DefaultLink>
            ),
            explorer: (
              <DefaultLink href="#explorer">
                <DefaultIconButton
                  icon={FaWpexplorer}
                  label="website"
                  showTooltip={true}
                />
              </DefaultLink>
            ),
            stakeLink: (
              <DefaultLink href="#chain_stake">
                <ListLinkButton text="Stack" />
              </DefaultLink>
            ),
            voteLink: (
              <DefaultLink href="#chain_vote">
                <ListLinkButton text="Vote" />
              </DefaultLink>
            ),
            dashboardLink: (
              <DefaultLink href="#chain_dashboard">
                <ListLinkButton text="Dashboard" />
              </DefaultLink>
            )
          };
        })
      );
      setAllChainsData(getOtherChainsDate);
      setCurrentAssetComponents(
        <DefaultCard title="My Asset">
          <Box display={{ base: 'none', lg: 'block' }} m={-6} mb={6}>
            <DisplayListHeader header={defaultAssetsHeader} />
          </Box>
          {getCurrentChainsData.map(
            ({
              chainId,
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
            }) => (
              <DisplayAssetChainRow
                key={chainId}
                chainName={chainName}
                imgSrc={imgSrc}
                address={address}
                apr={apr}
                availableBalance={availableBalance}
                stakedBalance={stakedBalance}
                claimableRewards={claimableRewards}
                website={website}
                explorer={explorer}
                stakeLink={stakeLink}
                voteLink={voteLink}
                dashboardLink={dashboardLink}
              />
            )
          )}
        </DefaultCard>
      );
      setTotalData(
        defaultTotalData.map(({ title, claimLink }) => ({
          title,
          claimLink,
          content:
            '$' +
            (
              parseFloat(
                getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .toString()
                  .replaceAll(',', '')
              ) / 100000000
            ).toFixed(2)
        }))
      );
    }
    if (!connectedWallet) {
      const getChainsDate = getShuffledArr(
        allTokens.map(({ name, image }) => {
          return {
            chainName: name,
            imgSrc: image,
            apr: `${(
              parseFloat(
                getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .toString()
                  .replaceAll(',', '')
              ) / 100000000
            ).toFixed(2)}%`,
            website: (
              <DefaultLink href="#website">
                <DefaultIconButton
                  icon={HiGlobe}
                  label="website"
                  showTooltip={true}
                />
              </DefaultLink>
            ),
            explorer: (
              <DefaultLink href="#explorer">
                <DefaultIconButton
                  icon={FaWpexplorer}
                  label="explorer"
                  showTooltip={true}
                />
              </DefaultLink>
            ),
            stakeLink: (
              <DefaultLink href="#chain_stake">
                <ListLinkButton text="Stack" />
              </DefaultLink>
            ),
            voteLink: (
              <DefaultLink href="#chain_vote">
                <ListLinkButton text="Vote" />
              </DefaultLink>
            ),
            dashboardLink: (
              <DefaultLink href="#chain_dashboard">
                <ListLinkButton text="Dashboard" />
              </DefaultLink>
            )
          };
        })
      );
      setAllChainsData(getChainsDate);
      setCurrentAssetComponents(undefined);
      setTotalData(defaultTotalData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedWallet]);

  useEffect(() => {
    setTotalComponents(
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} w="full" gap={8}>
        {totalData.map(({ title, content, claimLink }) => (
          <Box key={title}>
            <TotalCard title={title} content={content} claimLink={claimLink} />
          </Box>
        ))}
      </Grid>
    );
  }, [totalData]);

  useEffect(() => {
    if (allChainsData) {
      const allChains = (
        <DefaultCard title={connectedWallet ? 'Other Chains' : 'All Chains'}>
          {allChainsData.map(
            (
              {
                chainName,
                imgSrc,
                apr,
                address,
                website,
                explorer,
                stakeLink,
                voteLink,
                dashboardLink
              },
              index
            ) => (
              <DisplayChainRow
                key={index}
                chainName={chainName}
                imgSrc={imgSrc}
                apr={apr}
                address={address}
                website={website}
                explorer={explorer}
                stakeLink={stakeLink}
                voteLink={voteLink}
                dashboardLink={dashboardLink}
              />
            )
          )}
        </DefaultCard>
      );
      const defaultChains = (
        <DefaultCard title={connectedWallet ? 'Other Chains' : 'All Chains'}>
          {allChainsData
            .map(
              (
                {
                  chainName,
                  imgSrc,
                  apr,
                  address,
                  website,
                  explorer,
                  stakeLink,
                  voteLink,
                  dashboardLink
                },
                index
              ) => (
                <DisplayChainRow
                  key={index}
                  chainName={chainName}
                  imgSrc={imgSrc}
                  apr={apr}
                  address={address}
                  website={website}
                  explorer={explorer}
                  stakeLink={stakeLink}
                  voteLink={voteLink}
                  dashboardLink={dashboardLink}
                />
              )
            )
            .slice(0, 3)}
          <Flex justify="center">
            <Button
              variant="outline"
              onClick={() => {
                setShowAllChains(true);
              }}
            >
              <Text mr={2.5}>More&nbsp;(+{allChainsData.length - 3})</Text>
              <Icon as={IoChevronDown} />
            </Button>
          </Flex>
        </DefaultCard>
      );
      if (showAllChains) setAllChainsComponents(allChains);
      if (!showAllChains) setAllChainsComponents(defaultChains);
    }
  }, [connectedWallet, allChainsData, showAllChains]);

  return (
    <AssetList
      total={totalComponents}
      currentAsset={currentAssetComponents}
      allChains={allChainsComponents}
    />
  );
});

storiesOf('Cosmology/staking', module).add('ChooseValidators', () => {
  return <ChooseValidators />;
});

storiesOf('Cosmology/staking', module).add('Claim', () => {
  return <Claim />;
});

storiesOf('Cosmology/staking', module).add('Delegate', () => {
  return <Delegate />;
});

storiesOf('Cosmology/staking', module).add('ListValidators', () => {
  return <ListValidators />;
});

storiesOf('Cosmology/staking', module).add('Redelegate', () => {
  return <Redelegate />;
});

storiesOf('Cosmology/staking', module).add('Undelegate', () => {
  return <Undelegate />;
});
