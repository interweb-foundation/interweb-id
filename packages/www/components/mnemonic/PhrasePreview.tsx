import { Text, Stack, Grid, GridItem } from '@chakra-ui/react';

interface IProps {
  phraseStr: string;
  mode?: 'private' | 'public';
}

export default function PhrasePreview(props: IProps) {
  const { phraseStr, mode } = props;
  const phrases = phraseStr.split(' ').filter(it => it);

  const count = phrases.length;
  const rows = count <= 12 ? 3 : 6;

  let emptyTailCount = 0;
  if (count < 12) {
    emptyTailCount = 12 - count;
  } else if (12 < count && count < 24) {
    emptyTailCount = 24 - count;
  }

  for (let i=0; i<emptyTailCount; i++) {
    phrases.push('');
  }

  return (
    <Stack spacing={2}>
      <Text>Preview: </Text>
      <Grid
        templateRows={`repeat(${rows}, 1fr)`}
        templateColumns='repeat(4, 1fr)'
        gap={3}
      >
        {
          phrases.map((it, index) => (
            <GridItem
              key={`${index}-${it}`}
              w='100%'
              borderWidth={1}
              borderColor='blue.300'
              borderRadius='md'
              p={2}
            >
              <Stack direction='row' gap={2} h='36px' alignItems='center'>
                <Text color='gray'>{index + 1}. </Text>
                <Text fontSize='md'>{mode === 'private' ? it.replace(/./g, '*') : it}</Text>
              </Stack>
            </GridItem>
          ))
        }
      </Grid>
    </Stack>
  )
}