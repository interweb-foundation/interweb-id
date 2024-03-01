import { Box, Center, useColorModeValue } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useEffect } from 'react';
import {
  MdOutlineSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVerySatisfied
} from 'react-icons/md';

import { LogoCloud, SimpleBrand } from '../template/market/LogoCloud';
import { defaultTheme } from '../theme';
import { ChakraFrame } from './index';

storiesOf('Utilities/Iframe', module).add('ChakraFrame', () => {
  const brands = [
    'https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_960_720.png',
    'https://cdn.pixabay.com/photo/2013/01/29/22/06/facebook-76658_960_720.png',
    'https://cdn.pixabay.com/photo/2016/05/08/14/53/camera-1379223_960_720.jpg',
    <SimpleBrand name="create-cosmos-app" icon={MdOutlineSentimentSatisfied} />,
    <SimpleBrand name="cosmos-kit" icon={MdOutlineSentimentVerySatisfied} />,
    <SimpleBrand name="osmojs" icon={MdOutlineSentimentNeutral} />
  ];

  const initialColorMode = select('theme-color', ['dark', 'light'], 'light');
  const width = select(
    'preview-size',
    ['responsive', 'tablet', 'mobile'],
    'responsive'
  );
  const displayViewportSize = {
    responsive: '100%',
    tablet: '768px',
    mobile: '360px'
  };
  const config = {
    ...defaultTheme,
    initialColorMode,
    useSystemColorMode: false
  };
  const theme = extendTheme(config);

  useEffect(() => {
    if (initialColorMode === 'light')
      sessionStorage.setItem('iframeColorMode', 'light');
    if (initialColorMode === 'dark')
      sessionStorage.setItem('iframeColorMode', 'dark');
  }, [initialColorMode]);

  return (
    <Center w="full" bg={useColorModeValue('gray.100', 'gray.800')} my={16}>
      <ChakraFrame width={displayViewportSize[width]} theme={theme}>
        <Box w="full" p={4}>
          <LogoCloud
            headline="These and other companies trust us"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore"
            brands={brands}
          />
        </Box>
      </ChakraFrame>
    </Center>
  );
});
