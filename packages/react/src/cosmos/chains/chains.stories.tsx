import { Container, Stack, Text } from '@chakra-ui/react';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { assets, chains } from 'chain-registry';
import React, { useEffect, useState } from 'react';

import { DataType } from '../../types';
import { Assets } from './Assets';
import { ChangeChainDropdown } from './ChangeChainDropdown';
import { ChangeChainDropdownWithButton } from './ChangeChainDropdownWithButton';

const chainList = assets
  .filter((list) => {
    const chain = chains.find((chain) => chain.chain_name === list.chain_name);
    if (!chain) return false;
    if (chain.network_type !== 'mainnet') return false;
    return true;
  })
  .map(({ assets }) => assets.values())
  .map((iterator) => {
    for (const value of iterator) {
      return {
        chainName: value.coingecko_id,
        label: value.name,
        value: value.name,
        icon: {
          png: value.logo_URIs?.png,
          jpeg: value.logo_URIs?.jpeg,
          svg: value.logo_URIs?.svg
        },
        ibc: value.ibc
      };
    }
  })
  .filter((a) => a.icon) // only images
  .sort(() => (Math.random() > 0.5 ? 1 : -1)); // random

storiesOf('Cosmology/chains', module).add('ChangeChainDropdown', () => {
  const dropdownSize = {
    small: 'sm',
    medium: 'md',
    large: 'lg'
  };
  const walletIcon = select('wallet image', dropdownSize, dropdownSize.small);
  const [data, setData] = useState<DataType[]>([]);

  function handleSelectChainDropdown(value: DataType | null) {
    console.log('do something here', value); // eslint-disable-line
  }

  useEffect(() => {
    setData([
      {
        label: 'disabled',
        value: 'disabled',
        icon: undefined,
        chainName: 'disabled',
        isDisabled: true
      },
      ...chainList
    ]);
  }, []);

  return (
    <Container mx="auto" maxW={80} py={16}>
      <Stack w="full" spacing={6}>
        <Stack position="relative" zIndex={500} w="full">
          <Text>size: {walletIcon}</Text>
          <ChangeChainDropdown
            size={walletIcon}
            data={data}
            onChange={handleSelectChainDropdown}
          />
        </Stack>
      </Stack>
    </Container>
  );
});

storiesOf('Cosmology/chains', module).add(
  'ChangeChainDropdownWithButton',
  () => {
    const [data, setData] = useState<DataType[]>([]);
    const [selectedItem, setSelectedItem] = useState<DataType | null>(null);
    const [chainDropdownLoading, setChainDropdownLoading] = useState(false);

    function handleSelectChainDropdown(value: DataType | null) {
      setSelectedItem(value);
    }

    useEffect(() => {
      setData([
        {
          label: 'disabled',
          value: 'disabled',
          chainName: 'disabled',
          icon: undefined
        },
        ...chainList
      ]);
    }, []);

    useEffect(() => {
      setChainDropdownLoading(true);
      if (data.length > 0)
        setTimeout(() => {
          setChainDropdownLoading(false);
        }, 1500);
    }, [data]);

    return (
      <Container mx="auto" w="full" maxW="xl" py={16} px={4}>
        <ChangeChainDropdownWithButton
          data={data}
          selectedItem={selectedItem}
          onChange={handleSelectChainDropdown}
          chainDropdownLoading={chainDropdownLoading}
        />
      </Container>
    );
  }
);

storiesOf('Cosmology/chains', module).add('Assets', () => {
  return <Assets />;
});
