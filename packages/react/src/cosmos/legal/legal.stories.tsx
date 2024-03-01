import { Container } from '@chakra-ui/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import DisclaimerAgreementModalWindow from './DisclaimerAgreementModalWindow';

storiesOf('Cosmology/legal', module).add('DisclaimerAgreement', () => {
  return (
    <Container>
      <DisclaimerAgreementModalWindow />
    </Container>
  );
});
