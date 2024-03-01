import { Text, Stack, useColorModeValue } from "@chakra-ui/react";

const AboutHeader = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      spacing={{ base: 5, md: 6 }}
    >
      <Text
        as="h1"
        mx="auto"
        maxW="3xl"
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        fontWeight="extrabold"
        lineHeight={1.15}
        letterSpacing={{ base: "normal", md: "tight" }}
        color={useColorModeValue("purple.700", "purple.400")}
      >
        Own&nbsp;
        <Text
          as="span"
          backgroundClip="text"
          backgroundImage="linear-gradient(87.9deg,  rgba(90,204,193,0.9) 9.7%, rgba(81,162,228,0.9) 45.5%, rgba(182,19,182,0.95) 92.5%)"
        >
          your Digital Identity
        </Text>
      </Text>
      <Text
        maxW={{ md: "xl", lg: "4xl" }}
        fontSize={{ base: "md", md: "xl" }}
        color={useColorModeValue("purple.700", "purple.300")}
        opacity={0.9}
        p={3}
        pt={0}
      >
        Explore the powerful capabilities offered by Interweb ID, a user-friendly tool designed to provide seamless cryptographic operations, self-sovereign identity management, and cross-chain compatibility.

      </Text>
    </Stack>
  );
};

export default AboutHeader;
