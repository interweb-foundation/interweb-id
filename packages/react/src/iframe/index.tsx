import { ColorMode, ColorModeProvider } from '@chakra-ui/color-mode';
import { CSSReset, GlobalStyle, ThemeProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

import { defaultTheme } from '../theme';
import { IframeComponentProps } from '../types';
import { FrameProvider } from './frame-provider';

export const ChakraFrame = ({
  width,
  theme,
  children,
  animate = true,
  animationSeconds = 0.25
}: IframeComponentProps) => {
  const iframeRef = useRef<HTMLIFrameElement>();
  const [contentHeight, setContentHeight] = useState<string | number>(300);
  const [updateHeight, setUpdateHeight] = useState<string | number>(0);

  useEffect(() => {
    setContentHeight(updateHeight);
  }, [updateHeight]);

  return (
    <Frame
      width={width}
      height={contentHeight}
      ref={iframeRef}
      scrolling="no"
      style={
        animate
          ? {
              transition: `all ${animationSeconds}s ease-in-out`,
              msTransition: `all ${animationSeconds}s ease-in-out`,
              mozTransition: `all ${animationSeconds}s ease-in-out`,
              oTransition: `all ${animationSeconds}s ease-in-out`
            }
          : {}
      }
    >
      <FrameContextConsumer>
        {({ document, window }) => {
          window.addEventListener('load', () => {
            if (document.body.clientHeight)
              setUpdateHeight(document.body.clientHeight);
          });
          window.addEventListener('resize', () => {
            if (updateHeight === 0) setUpdateHeight(document.body.clientHeight);
          });
          return (
            <FrameProvider>
              <Global
                styles={{
                  html: {
                    fontFamily: 'sans-serif'
                  }
                }}
              />
              <ThemeProvider theme={theme ?? defaultTheme}>
                <ColorModeProvider
                  value={sessionStorage.getItem('iframeColorMode') as ColorMode}
                  options={{
                    useSystemColorMode: false,
                    initialColorMode: 'light'
                  }}
                >
                  <CSSReset />
                  <GlobalStyle />
                  {children}
                </ColorModeProvider>
              </ThemeProvider>
            </FrameProvider>
          );
        }}
      </FrameContextConsumer>
    </Frame>
  );
};
