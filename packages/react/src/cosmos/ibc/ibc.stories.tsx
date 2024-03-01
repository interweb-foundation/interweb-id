import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import DepositSimple from './DepositSimple';
import DepositTokens from './DepositTokens';
import IbcList from './IbcList';
import WithdrawSimple from './WithdrawSimple';
import WithdrawTokens from './WithdrawTokens';

storiesOf('Cosmology/ibc', module).add('DepositSimple', () => {
  return <DepositSimple />;
});

storiesOf('Cosmology/ibc', module).add('DepositTokens', () => {
  const showIcon = boolean('show wallet icon', true);
  return <DepositTokens showIcon={showIcon} />;
});

storiesOf('Cosmology/ibc', module).add('IbcList', () => {
  const smallIcon = boolean('small icon', false);
  return <IbcList smallIcon={smallIcon} />;
});

storiesOf('Cosmology/ibc', module).add('WithdrawSimple', () => {
  return <WithdrawSimple />;
});

storiesOf('Cosmology/ibc', module).add('WithdrawTokens', () => {
  const showIcon = boolean('show wallet icon', true);
  return <WithdrawTokens showIcon={showIcon} />;
});
