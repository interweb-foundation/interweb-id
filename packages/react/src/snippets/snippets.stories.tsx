import { Box, extendTheme, Stack } from '@chakra-ui/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { shadesOfPurple } from 'react-code-blocks';
import {
  MdOutlineSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVerySatisfied
} from 'react-icons/md';

import { LogoCloud, SimpleBrand } from '../template/market/LogoCloud';
import { defaultThemeObject } from '../theme';
import exampleCode from './example-code';
import { SnippetBlock } from './snippets';

storiesOf('Utilities/Snippets', module).add('IframeCodeBlock', () => {
  const brands = [
    'https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_960_720.png',
    'https://cdn.pixabay.com/photo/2013/01/29/22/06/facebook-76658_960_720.png',
    'https://cdn.pixabay.com/photo/2016/05/08/14/53/camera-1379223_960_720.jpg',
    <SimpleBrand name="create-cosmos-app" icon={MdOutlineSentimentSatisfied} />,
    <SimpleBrand name="cosmos-kit" icon={MdOutlineSentimentVerySatisfied} />,
    <SimpleBrand name="osmojs" icon={MdOutlineSentimentNeutral} />
  ];
  const config = {
    ...defaultThemeObject,
    initialColorMode: 'light',
    useSystemColorMode: false
  };
  const theme = extendTheme({ ...config });
  return (
    <Stack p={4}>
      <SnippetBlock
        theme={theme}
        codeTheme={shadesOfPurple}
        code={exampleCode}
        wrapLongLines={true}
        componentName="Logo Cloud"
        language="ts"
      >
        <Box p={8}>
          <LogoCloud
            headline="These and other companies trust us"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore"
            brands={brands}
          />
        </Box>
      </SnippetBlock>
    </Stack>
  );
});
