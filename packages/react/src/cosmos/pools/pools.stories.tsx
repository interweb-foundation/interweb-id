import { storiesOf } from '@storybook/react';
import React from 'react';

import LiquidityBootstrap from './LiquidityBootstrap';
import ListPools from './ListPools';
import LockTokens from './LockTokens';
import ManageLiquidity from './ManageLiquidity';
import PoolDetail from './PoolDetail';

storiesOf('Cosmology/pools', module).add('LiquidityBootstrap', () => {
  return (
    <>
      <LiquidityBootstrap />
    </>
  );
});

storiesOf('Cosmology/pools', module).add('ListPools', () => {
  return (
    <>
      <ListPools />
    </>
  );
});

storiesOf('Cosmology/pools', module).add('LockTokens', () => {
  return (
    <>
      <LockTokens />
    </>
  );
});

storiesOf('Cosmology/pools', module).add('ManageLiquidity', () => {
  return (
    <>
      <ManageLiquidity />
    </>
  );
});

storiesOf('Cosmology/pools', module).add('PoolDetail', () => {
  return (
    <>
      <PoolDetail />
    </>
  );
});
