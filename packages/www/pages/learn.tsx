import { Stack } from "@chakra-ui/react";
import LearnHeader from "../components/learn/LearnHeader";
import LearnList from "../components/learn/LearnList";
import Layout from "../components/Layout";
import { Head } from "../components/seo/Head";

const TutorialsPage = () => {
  return (
    <>
      <Head
        title="Interweb ID: Own your cryptography, own your identity."
        description="Learn how to efficiently manage your wallet and secure your digital assets with Interweb ID"
        route="/learn"
      />
      <Layout>
        <Stack
          w="full"
          spacing={{ base: 20, md: 28 }}
          pt={{ base: 20, md: 28 }}
          pb={16}
          px={5}
          justifyContent="center"
          alignItems="center"
        >
          <LearnHeader />
          <LearnList />
        </Stack>
      </Layout>
    </>
  );
};

export default TutorialsPage;
