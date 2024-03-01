import Layout from "../../components/Layout";
import { Stack } from "@chakra-ui/react";
import { Head } from "../../components/seo/Head";
import Cta from "../../components/shamir/Cta";
import { H1, H2, P, ColorfulText } from "../../components/basics";

export default () => {
    return (
        <Layout>
            <Head
                title="Interweb ID | Why Shamir Secrets?"
                description="Why Shamir Secrets?"
                route="/shamir/about" />
            <Stack
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                spacing={{ base: 5, md: 6 }}
            >
                <H1>
                    Harnessing the Power of Shamir Secrets:&nbsp;
                    <ColorfulText>
                        Securely Store and Share Partial Secrets
                    </ColorfulText>
                </H1>
                <H2>
                    Understanding Shamir Secrets in Decentralized Environments
                </H2>
                <P>
                    Shamir Secret Sharing, a groundbreaking cryptographic concept, offers a robust and decentralized approach to securely storing and sharing sensitive information across multiple parties. In the ever-evolving world of decentralized technologies, where trust and security are paramount, Shamir Secrets are emerging as a game-changer for safeguarding critical data and mitigating single points of failure.
                </P>
                <H2>
                    How Shamir Secret Sharing Works
                </H2>

                <P>
                    Shamir Secret Sharing utilizes advanced mathematical algorithms to break a secret into multiple "shares." Each share is distributed to different parties, and the secret can only be reconstructed when a specified number of shares are combined. This process is known as "reconstruction threshold," providing resilience against data loss, unauthorized access, or potential security breaches.
                </P>
            </Stack>
            <Cta />
        </Layout>);
};

