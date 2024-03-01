import Layout from "../../components/Layout";
import { Head } from "../../components/seo/Head";
import { ShamirComponent } from "../../components/shamir/Shamir";
import NextLink from "next/link";
import {
    Text,
    Stack,
    Box,
    Flex,
    useColorModeValue,
    Link as ChakraLink,
    Button,
} from "@chakra-ui/react";
import { ColorfulText, H1, P } from "../../components/basics";
const ShamirPage = () => {
    return (
        <Layout>
            <Head
                title="Shamir"
                description="Shamir Secret Sharing"
                route="/shamir"
            />
            <Stack
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                spacing={{ base: 5, md: 6 }}
            >
                <H1>
                    Shamir Secrets: &nbsp;
                    <ColorfulText>
                        solution for secure data storage and sharing
                    </ColorfulText>
                </H1>
                <P>
                    As the decentralized landscape continues to expand, Shamir Secret Sharing emerges as a cornerstone technology for secure data storage and sharing.
                </P>
                <NextLink href="/shamir/about" passHref={true}>
                    <ChakraLink
                        _hover={{ textDecoration: "none" }}
                        _focus={{ boxShadow: "none" }}
                    >
                        <Button
                            size="lg"
                            shadow="md"
                            _focus={{ boxShadow: "none", opacity: 0.9 }}
                        >
                            Not sure what Shamir Secrets are?
                        </Button>
                    </ChakraLink>
                </NextLink>
            </Stack>

            <ShamirComponent />
        </Layout>
    );
};

export default ShamirPage;
