import Layout from "../../components/Layout";
import { Head } from "../../components/seo/Head";
import NextLink from "next/link";
import {
    Text,
    Stack,
    useColorModeValue,
    Link as ChakraLink,
    Button,
} from "@chakra-ui/react";
import { MnemonicComponent } from "../../components/mnemonic/Mnemonic";
import { ColorfulText, H1, P } from "../../components/basics";

const MnemonicPage = () => {

    return (
        <Layout>
            <Head
                title="Interweb ID | Crypto Wallet Creation"
                description="Create Your Secure Digital Wallet"
                route="/mnemonic"
            />
            <Stack
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                spacing={{ base: 5, md: 6 }}
            >
                <H1>
                    Your&nbsp;
                    <ColorfulText>
                        keys, your identity
                    </ColorfulText>
                </H1>
                <P>
                    Explore the powerful capabilities offered by Interweb ID, a user-friendly tool designed to provide seamless cryptographic operations, self-sovereign identity management, and cross-chain compatibility.
                </P>
                <NextLink href="/mnemonic/about" passHref={true}>
                    <ChakraLink
                        _hover={{ textDecoration: "none" }}
                        _focus={{ boxShadow: "none" }}
                    >
                        <Button
                            size="lg"
                            shadow="md"
                            _focus={{ boxShadow: "none", opacity: 0.9 }}
                        >
                            Not sure what Mnemonics are?
                        </Button>
                    </ChakraLink>
                </NextLink>
            </Stack>
            <MnemonicComponent />
        </Layout>
    );
};

export default MnemonicPage;
