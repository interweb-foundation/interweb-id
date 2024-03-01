import React from "react";
import { Text, Box, useColorModeValue, Stack } from "@chakra-ui/react";

const disclaimerData = [
  {
    title: "No Investment Advice",
    description:
      "The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. Interweb ID does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.",
  },
  {
    title: "Accuracy of Information",
    description:
      "Interweb ID will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. Interweb ID provides all information as is. You understand that you are using any and all information available here at your own risk.",
  },
  {
    title: "No Backups",
    description:
      "You are solely responsible for the security and backup of your cryptographic keys and any data processed with keys generated with Interweb ID. We highly recommend exercising caution and implementing additional security measures to protect your sensitive information.",
  },
  {
    title: "Risk Statement",
    description:
      "The trading of cryptocurrencies has potential rewards, and it also has potential risks involved. Trading may not be suitable for all people. Anyone wishing to invest should seek his or her own independent financial or professional advice.",
  },
  {
    title: "Tax Compliance",
    description:
      "The users of Interweb ID app are solely responsible to determinate what, if any, taxes apply to their cryptocurrency transactions. The owners of, or contributors to, the Interweb ID app are NOT responsible for determining the taxes that apply to cryptocurrency transactions.",
  },
  {
    title: "Software Disclaimer",
    description:
      "AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. Although Web, Inc. ( “Web Incubator” ) developed much of the initial code for the Interweb ID app, it does not provide, own, or control the leveraged blockchain protocols, which are run by decentralized validator sets. Upgrades and modifications to these protocol are managed in a community-driven way by holders of various governance tokens. No developer or entity involved in creating Interweb ID will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Interweb ID app, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.",
  },
];

const SubTitle = ({ title }: { title: string }) => {
  return (
    <Text
      as="h2"
      fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      letterSpacing="tight"
      lineHeight="short"
      fontWeight="bold"
      color={useColorModeValue("gray.900", "white")}
    >
      {title}
    </Text>
  );
};

const Description = ({ desc }: { desc: string }) => {
  return (
    <Text
      as="p"
      maxW={{ md: "2xl", lg: "3xl" }}
      opacity={0.65}
      fontSize={{ base: "lg", md: "xl" }}
      lineHeight={{ base: "short", md: "base" }}
      whiteSpace="break-spaces"
      pb={2}
    >
      {desc}
    </Text>
  );
};

const Disclaimer = () => {
  return (
    <Box w="full" maxW="5xl" mx="auto" px={{ base: 8, md: 6 }} py={12}>
      <Stack textAlign="center" mx="auto" spacing={8}>
        <Text
          as="h1"
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
          letterSpacing="tight"
          lineHeight="short"
          fontWeight="extrabold"
          color={useColorModeValue("gray.900", "white")}
        >
          Disclaimer
        </Text>
        {disclaimerData.map(({ title, description }, i) => {
          return (
            <Stack
              key={i}
              spacing={1.5}
              justifyContent="center"
              alignItems="center"
            >
              <SubTitle title={title} />
              <Description desc={description} />
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Disclaimer;
