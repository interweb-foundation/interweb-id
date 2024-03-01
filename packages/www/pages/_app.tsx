// pages/_app.js
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StoreProvider } from "../stores";

const styles = {
  global: (props) => ({
    // styles for the `body`
    body: {
      background:
        props.colorMode === "dark"
          ? "no-repeat center linear-gradient(112.1deg,  rgba(29,23,38,0.95) 11.4%, rgba(65,48,87,0.95) 70.2%)"
          : "white",
    },
  }),
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors, styles });

function InterwebIDApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  );
}

export default InterwebIDApp;
