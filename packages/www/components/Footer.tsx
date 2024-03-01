import NextLink from "next/link";
import {
  Box,
  Flex,
  Stack,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  Divider,
  Grid,
  GridItem,
  HStack,
  Icon,
  Center,
} from "@chakra-ui/react";
import {
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaYoutube,
  FaYinYang,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { Logo } from "./Icons";
import { AnimateFlex } from "./AnimateComponents";

interface BaseLinkType {
  name: string;
  href: string;
  icon?: IconType;
  transform?: string;
}
interface FooterPageLinks {
  header?: string;
  links: BaseLinkType[];
}

const FOOTER_PAGE_LINKS: FooterPageLinks[] = [
  {
    header: "Interweb ID",
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Overview",
        href: "/overview",
      },
      {
        name: "Tutorials",
        href: "/learn",
      },
    ],
  },
  {
    header: "Cryptography",
    links: [
      {
        name: "Mnemonic",
        href: "/mnemonic",
      },
      {
        name: "Shamir",
        href: "/shamir",
      },
    ],
  },
  {
    header: "Legal",
    links: [
      {
        name: "Disclaimer",
        href: "/disclaimer",
      },
    ],
  },
];
const FOOTER_SOCIAL_LINKS: BaseLinkType[] = [
  {
    name: "github",
    href: "https://github.com/interweb-foundation/interweb-id",
    icon: FaGithub,
  },
  {
    name: "twitter",
    href: "https://twitter.com/InterchainID",
    icon: FaTwitter,
  }
];

const LinkItem = ({ header, links }: FooterPageLinks) => (
  <GridItem px={{ lg: 12 }}>
    <HStack alignItems="center" spacing={1} mb={2}>
      <Text fontSize="lg" fontWeight="semibold">
        {header}
      </Text>
    </HStack>
    <Stack spacing={1.5}>
      {links.map(({ name, href }, i) => (
        <NextLink key={`${name}${i}`} href={href} passHref={true}>
          <ChakraLink _focus={{ outline: "none" }}>
            <Text fontWeight="medium">{name}</Text>
          </ChakraLink>
        </NextLink>
      ))}
    </Stack>
  </GridItem>
);
const SocialItem = ({ href, icon, transform }: BaseLinkType) => (
  <NextLink href={href} passHref={true}>
    <ChakraLink _focus={{ outline: "none" }} target={"_blank"}>
      <Box w={6} h={6}>
        <Icon as={icon} w="full" h="full" transform={transform} />
      </Box>
    </ChakraLink>
  </NextLink>
);

export default function Footer() {
  return (
    <Center px={6} pt={8} pb={16}>
      <Stack justifyContent="center" w="full" maxW="5xl" spacing={12}>
        <HStack justifyContent="center" alignItems="center">
          <Box w="full">
            <Divider
              borderColor={useColorModeValue(
                "rgba(235,173,254,0.25)",
                "rgba(235,173,254,0.2)"
              )}
            />
          </Box>
          <AnimateFlex
            justify="center"
            align="center"
            border="1px solid"
            borderColor={useColorModeValue(
              "rgba(235,173,254,0.25)",
              "rgba(235,173,254,0.2)"
            )}
            borderRadius="full"
            initial={false}
            animate={{
              rotate: "0deg",
              transition: {
                duration: 3,
              },
            }}
            // desktop
            whileHover={{
              rotate: "360deg",
              transition: {
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
              },
            }}
            // mobile
            whileTap={{
              rotate: "360deg",
              transition: {
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
              },
            }}
            p={1}
          >
            <Icon as={Logo} w={6} h={6} />
          </AnimateFlex>
          <Box w="full">
            <Divider
              borderColor={useColorModeValue(
                "rgba(235,173,254,0.25)",
                "rgba(235,173,254,0.2)"
              )}
            />
          </Box>
        </HStack>
        <Grid
          templateColumns={{ md: "repeat(4, 1fr)" }}
          color={useColorModeValue("purple.600", "purple.300")}
          opacity={useColorModeValue(0.8, 0.6)}
          gap={{ base: 10, md: 6 }}
          w="full"
          px={6}
        >
          {FOOTER_PAGE_LINKS.map(({ header, links }, i) => (
            <LinkItem key={`${header}${i}`} header={header} links={links} />
          ))}
          <GridItem colSpan={{ md: 4 }}>
            <Center>
              <Flex
                w="full"
                maxW={{ md: 72 }}
                justify="space-between"
                px={{ base: 2, lg: 0 }}
                mt={{ md: 8 }}
                mb={{ base: 10, md: 8 }}
              >
                {FOOTER_SOCIAL_LINKS.map(
                  ({ name, href, icon, transform }, i) => (
                    <SocialItem
                      key={`${name}${i}`}
                      name={name}
                      href={href}
                      icon={icon}
                      transform={transform}
                    />
                  )
                )}
              </Flex>
            </Center>
            <Text fontSize="sm" textAlign="center" opacity={0.8}>
              © {new Date().getFullYear()} Interweb ID. All rights reserved
            </Text>
          </GridItem>
        </Grid>
      </Stack>
    </Center>
  );
}
