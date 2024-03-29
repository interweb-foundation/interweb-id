import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import weakMemoize from '@emotion/weak-memoize';
import * as React from 'react';
import { FrameContextConsumer } from 'react-frame-component';

const memoizedCreateCacheWithContainer = weakMemoize((container) => {
  const newCache = createCache({ key: 'dockey', container });
  return newCache;
});

export const FrameProvider = (props) => (
  <FrameContextConsumer>
    {({ document }) => {
      return (
        <CacheProvider value={memoizedCreateCacheWithContainer(document.head)}>
          {props.children}
        </CacheProvider>
      );
    }}
  </FrameContextConsumer>
);
