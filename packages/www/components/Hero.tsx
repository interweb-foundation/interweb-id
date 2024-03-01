import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Link as ChakraLink,
  Center,
  useDimensions,
} from "@chakra-ui/react";
import { AnimateButton, AnimateBox } from "./AnimateComponents";

const Hero = () => {
  const elementRef = useRef();
  const dimensions = useDimensions(elementRef, true);
  const [contentDimensions, setContentDimensions] = useState<any>();

  useEffect(() => {
    if (dimensions) {
      setContentDimensions(dimensions.borderBox);
    }
  }, [dimensions]);

  return (
    <Center
      position="relative"
      minH="inherit"
      overflow="hidden"
      h="full"
      py={16}
    >
      <Stack
        ref={elementRef}
        alignItems="center"
        justifyContent="space-between"
        textAlign="center"
        color={useColorModeValue("purple.800", "purple.400")}
        maxW="3xl"
        pt={{ base: 10, md: 12, lg: 24 }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
          fontWeight="bold"
          lineHeight={1}
          letterSpacing="normal"
          mb={{ base: 3, md: 6 }}
        >
          Own your Cryptography,
          <Text
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Own your Identity
          </Text>
        </Heading>
        <Text
          maxW={{ base: 72, md: 80, lg: "lg" }}
          fontSize={{ base: "md", md: "lg", lg: "2xl" }}
          lineHeight={1.25}
          letterSpacing={{ lg: "tight" }}
          color={useColorModeValue("purple.400", "purple.200")}
        >
          Take full control of your cryptographic operations and web3 identity
        </Text>
        <Box pt={{ base: 3, md: 4, lg: 10 }}>
          <NextLink href="/mnemonic" passHref={true}>
            <ChakraLink _hover={{ textDecoration: "none" }}>
              <AnimateButton
                size="lg"
                color="whiteAlpha.900"
                _hover={{
                  transition: "all .8s ease-in-out",
                }}
                _focus={{ outline: "none" }}
                animate={{
                  backgroundImage:
                    "linear-gradient(30.1deg, rgba(227,137,240,0.9) 0%, rgba(143,104,232,0.85) 100%)",
                  scale: [0.95, 1, 0.95],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5,
                }}
              >
                Create your wallet
              </AnimateButton>
            </ChakraLink>
          </NextLink>
        </Box>
        <Box pt={3}>
          <NextLink href="https://github.com/interweb-foundation/interweb-id" passHref={true}>
            <ChakraLink
              fontSize={{ base: "sm", lg: "lg" }}
              color={useColorModeValue("#492db7", "#de6ffb")}
              target="_blank"
            >
              checkout our code
            </ChakraLink>
          </NextLink>
        </Box>
      </Stack>
      {/* circle background */}
      <AnimateBox
        position="absolute"
        border="1px solid"
        borderColor={useColorModeValue(
          "rgba(235,173,254,0.2)",
          "rgba(235,173,254,0.1)"
        )}
        borderRadius="full"
        zIndex={-5}
        w={`${contentDimensions ? contentDimensions.width + 56 : 0}px`}
        h={`${contentDimensions ? contentDimensions.width + 56 : 0}px`}
        ml={-4}
        animate={{
          translateX: ["0px", "-100px", "100px", "0px"],
          translateY: ["0px", "20px", "-20px", "0px"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          duration: 10,
        }}
      />
      <AnimateBox
        position="absolute"
        border="1px solid"
        borderColor={useColorModeValue(
          "rgba(235,173,254,0.25)",
          "rgba(235,173,254,0.15)"
        )}
        borderRadius="full"
        zIndex={-5}
        w={`${contentDimensions ? contentDimensions.width + 56 : 0}px`}
        h={`${contentDimensions ? contentDimensions.width + 56 : 0}px`}
        mr={-4}
        animate={{
          translateX: ["0px", "150px", "-150px", "0px"],
          translateY: ["0px", "-20px", "20px", "0px"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          duration: 10,
        }}
      />
    </Center>
  );
};

export default Hero;
