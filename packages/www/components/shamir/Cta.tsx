import React from "react";
import NextLink from "next/link";
import {
    Text,
    Box,
    Flex,
    useColorModeValue,
    Link as ChakraLink,
    Button,
} from "@chakra-ui/react";

const Cta = () => {
    return (
        <Box
            w="full"
            mx="auto"
            px={{ base: 6, md: 12 }}
            pt={{ base: 4, md: 6 }}
            pb={{ base: 4, md: 8, lg: 10 }}
        >
            <Flex
                w="full"
                maxW={{ md: "3xl", lg: "4xl" }}
                mx="auto"
                flexDirection={{ base: "column", md: "row" }}
                alignItems={{ md: "center" }}
                justifyContent={{ md: "space-between" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                    color={useColorModeValue("gray.900", "gray.100")}
                    mb={{ base: 6, md: 0 }}
                >
                    <Text as="p">Ready to start?</Text>
                    <Text as="span" color="purple.400">
                        Encrypt your secrets now
                    </Text>
                </Text>
                <NextLink href="/shamir" passHref={true}>
                    <ChakraLink
                        _hover={{ textDecoration: "none" }}
                        _focus={{ boxShadow: "none" }}
                    >
                        <Button
                            size="lg"
                            shadow="md"
                            color="white"
                            bg={useColorModeValue("purple.400", "purple.500")}
                            _hover={{
                                bg: useColorModeValue("purple.500", "purple.600"),
                            }}
                            _focus={{ boxShadow: "none", opacity: 0.9 }}
                        >
                            Encrypt Now
                        </Button>
                    </ChakraLink>
                </NextLink>
            </Flex>
        </Box>
    );
};

export default Cta;
