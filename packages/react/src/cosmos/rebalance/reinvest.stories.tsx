import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import ChooseBalance from './ChooseBalance';
import ChooseCoins from './ChooseCoins';
import ChoosePools from './ChoosePools';
import PendingJobs from './PendingJobs';

storiesOf('Cosmology/rebalance', module).add('ChooseBalance', () => {
  return <ChooseBalance />;
});

storiesOf('Cosmology/rebalance', module).add('ChooseCoins', () => {
  return <ChooseCoins />;
});

storiesOf('Cosmology/rebalance', module).add('ChoosePools', () => {
  const useSmallIcons = boolean('useSmallIcons', false);
  return <ChoosePools useSmallIcons={useSmallIcons} />;
});

storiesOf('Cosmology/rebalance', module).add('PendingJobs', () => {
  return <PendingJobs />;
});
