import { Grid } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function LearnCard({ learnCards }: { learnCards: ReactNode[] }) {
  return (
    <Grid
      justifyContent="center"
      templateColumns={{
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)'
      }}
      gap={{ base: 8, lg: 6 }}
    >
      {learnCards}
    </Grid>
  );
}
