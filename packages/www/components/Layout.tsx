import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Box minH="calc(100vh - 5rem)">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
