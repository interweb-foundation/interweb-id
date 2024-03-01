import Cta from "../components/mnemonic/Cta";
import AboutHeader from "../components/about/AboutHeader";
import Layout from "../components/Layout";
import { Head } from "../components/seo/Head";
import Features from "../components/features";
import { Stack } from "@chakra-ui/react";

const OverviewPage = () => {
  return (
    <>
      <Head
        title="About Interweb ID"
        description="Explore the powerful capabilities offered by Interweb ID, a user-friendly tool designed to provide seamless cryptographic operations, self-sovereign key and identity management, and cross-chain compatibility."
        route="/overview"
      />
      <Layout>
        <Stack
          w="full"
          spacing={{ base: 20, md: 28 }}
          pt={{ base: 20, md: 28 }}
          pb={16}
          px={5}
        >
          <AboutHeader />
          <Features />
          <Cta />
        </Stack>
      </Layout>
    </>
  );
};

export default OverviewPage;
