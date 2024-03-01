import { storiesOf } from '@storybook/react';
import React from 'react';

import ActiveProposals from './ActiveProposals';
import ProposalList from './ProposalList';
import ShowCurrentVotesBar from './ShowCurrentVotesBar';
import ShowCurrentVotesPie from './ShowCurrentVotesPie';
import ShowProposalDetail from './ShowProposalDetail';
import ShowProposalPreview from './ShowProposalPreview';
import Vote from './Vote';

storiesOf('Cosmology/governance', module).add('ActiveProposals', () => {
  return <ActiveProposals />;
});
storiesOf('Cosmology/governance', module).add('ProposalList', () => {
  return <ProposalList />;
});
storiesOf('Cosmology/governance', module).add('ShowCurrentVotesBar', () => {
  return <ShowCurrentVotesBar />;
});
storiesOf('Cosmology/governance', module).add('ShowCurrentVotesPie', () => {
  return <ShowCurrentVotesPie />;
});
storiesOf('Cosmology/governance', module).add('ShowProposalDetail', () => {
  return <ShowProposalDetail />;
});
storiesOf('Cosmology/governance', module).add('ShowProposalPreview', () => {
  return <ShowProposalPreview />;
});
storiesOf('Cosmology/governance', module).add('Vote', () => {
  return <Vote />;
});
