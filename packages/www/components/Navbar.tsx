import NextLink from "next/link";
import {
  Box,
  Text,
  Button,
  Stack,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  PopoverBody,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useColorMode,
  useColorModeValue,
  Flex,
  Center,
  Divider,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  RiSunFill,
  RiMoonFill,
  RiCloseFill,
  RiGithubFill,
  RiArrowDownSLine,
  RiArrowRightSFill,
  RiMenuLine,
} from "react-icons/ri";
import { Logo } from "./Icons";
import { useCallback, useEffect, useState } from "react";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  target?: string;
  icon?: IconType;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Interweb ID",
    icon: RiArrowRightSFill,
    children: [
      {
        label: "Interweb ID",
        subLabel: "Interweb ID",
        href: "/",
      },
      {
        label: "Overview",
        subLabel: "About Interweb ID",
        href: "/overview",
      },
      {
        label: "Tutorials",
        subLabel: "Learn how to manage your digital keys and identity",
        href: "/learn",
      },
      {
        label: "Create a Wallet",
        subLabel: "Create and secure your digital wallet",
        href: "/mnemonic",
      },
      {
        label: "Use Shamir Secret Sharing",
        subLabel: "Unlock the power of Shamir Secret Sharing with Interweb ID",
        href: "/shamir",
      },
    ],
  },

  // {
  //   label: "Products",
  //   icon: RiGithubFill,
  //   children: ProductListData.map(product => {
  //     return {
  //       label: product.label,
  //       href: `/products/${product.slug}`,
  //       target: undefined
  //     }
  //   })
  // },

  // {
  //   label: "Github",
  //   icon: RiGithubFill,
  //   children: ProductListData.map((product) => {
  //     return {
  //       label: product.label,
  //       href: product.href,
  //       target: "_blank",
  //     };
  //   }),
  // },
  // {
  //     label: 'Find Work',
  //     children: [
  //         {
  //             label: 'Job Board',
  //             subLabel: 'Find your dream design job',
  //             href: '#',
  //         },
  //         {
  //             label: 'Freelance Projects',
  //             subLabel: 'An exclusive list for contract work',
  //             href: '#',
  //         },
  //     ],
  // },
  // {
  //     label: 'Learn More',
  //     href: '#',
  // },
  // {
  //     label: 'Hire Designers',
  //     href: '#',
  // },
];
const DesktopLinks = ({ label, icon, children }: NavItem) => {
  return (
    <Box>
      <Popover>
        <PopoverTrigger>
          <Button
            variant="ghost"
            color={useColorModeValue("purple.600", "purple.300")}
            borderRadius="md"
            _hover={{
              opacity: 0.8,
            }}
            _focus={{
              outline: "none",
            }}
          >
            <Text fontSize="lg" mr={1}>
              {label}
            </Text>
            <Icon as={RiArrowDownSLine} />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          zIndex="1000"
          bg={useColorModeValue("white", "#423157")}
          color={useColorModeValue("purple.700", "#bfa4ee")}
          border="none"
          borderRadius="xl"
          boxShadow={useColorModeValue(
            "base",
            "0 1px 4px 1px #352b39, 0 1px 4px -2px #9743ff, 0 2px 10px -5px #242424"
          )}
          _focus={{ outline: "none" }}
        >
          <PopoverBody p={2}>
            <Stack p={1} spacing={1.5}>
              {children.map(
                ({ label: linkName, subLabel, href, target }, i) => (
                  <NextLink key={`${label}${i}`} href={href} passHref={true}>
                    <ChakraLink
                      p={3}
                      borderRadius="xl"
                      _hover={{
                        bg: useColorModeValue(
                          "whiteAlpha.500",
                          "whiteAlpha.200"
                        ),
                        textDecoration: "none",
                      }}
                      _focus={{ outline: "none" }}
                      target={target}
                    >
                      <Stack
                        isInline={true}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Text
                            fontSize="lg"
                            fontWeight="semibold"
                            opacity={0.95}
                          >
                            {linkName}
                          </Text>
                          <Text fontSize="md" opacity={0.75}>
                            {subLabel}
                          </Text>
                        </Box>
                        {icon && (
                          <Box w={6} h={6} minW={6} minH={6} opacity={0.7}>
                            <Icon as={icon} w="full" h="full" />
                          </Box>
                        )}
                      </Stack>
                    </ChakraLink>
                  </NextLink>
                )
              )}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
const DesktopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center position="fixed" top={0} left={0} right={0} zIndex="sticky">
      <Box
        _after={{
          content: '""',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          position: "absolute",
          backdropFilter: "blur(6px)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        zIndex={-1}
      ></Box>
      <Box w="full" maxW="5xl">
        <Stack
          isInline={true}
          justifyContent="space-between"
          alignItems="center"
          w="full"
          py={2}
        >
          {/* logo */}
          <NextLink href="/" passHref={true}>
            <ChakraLink _focus={{ outline: "none" }}>
              <Box px={6} py={3.5}>
                <Box w="full" minW={10} maxW={10} h="full">
                  <Logo />
                </Box>
              </Box>
            </ChakraLink>
          </NextLink>
          {/* nav link */}
          <Stack isInline={true} alignItems="center" spacing={4} py={2} px={6}>
            <Stack isInline={true}>
              {NAV_ITEMS.map(({ label, icon, children }, i) => (
                <DesktopLinks
                  key={`${label}${i}`}
                  label={label}
                  icon={icon}
                  children={children}
                />
              ))}
            </Stack>
            <Button
              variant="ghost"
              color={useColorModeValue("purple.600", "purple.300")}
              borderRadius="full"
              _hover={{
                bg: useColorModeValue(
                  "radial-gradient(circle 875px at 49.8% 64.3%,  rgba(254,251,255,0.8) 0%, rgba(244,221,255,0.85) 46.9%)",
                  "radial-gradient(circle 875px at 49.8% 64.3%,  rgba(39,2,75,0.8) 2.2%, rgba(20,1,33,0.85) 20.2%, rgba(27,88,111,0.85) 58.6%, rgba(115,88,44,0.85) 75%, rgba(99,19,90,0.85) 89.6%, rgba(12,51,76,0.85) 96.1%)"
                ),
              }}
              _focus={{ outline: "none" }}
              onClick={toggleColorMode}
              px={0}
            >
              <Icon
                as={colorMode === "light" ? RiMoonFill : RiSunFill}
                w={4}
                h={4}
              />
            </Button>
          </Stack>
        </Stack>
        <Box>
          <Divider
            borderColor={useColorModeValue(
              "rgba(235,173,254,0.25)",
              "rgba(235,173,254,0.2)"
            )}
          />
        </Box>
      </Box>
    </Center>
  );
};
const MobileLinks = ({ label, icon, children }: NavItem) => {
  return (
    <AccordionItem border="none">
      <AccordionButton
        px={0}
        py={2}
        flex={1}
        fontSize="lg"
        fontWeight="bold"
        textAlign="start"
        justifyContent="space-between"
        alignItems="center"
        _hover={{ bg: "transparent", opacity: 0.7 }}
        _focus={{ boxShadow: "none", bg: "transparent" }}
      >
        {label}
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel px={0} pb={4}>
        <Stack spacing={2}>
          {children.map(({ label: linkName, subLabel, href }, i) => (
            <NextLink key={`${label}${i}`} href={href} passHref={true}>
              <ChakraLink
                borderRadius="xl"
                py={2}
                px={4}
                _hover={{
                  bg: useColorModeValue("blackAlpha.50", "whiteAlpha.50"),
                  textDecoration: "none",
                }}
                _focus={{ outline: "none" }}
              >
                <Flex justify="space-between" alignItems="center">
                  <Box>
                    <Text fontSize="lg" fontWeight="semibold">
                      {linkName}
                    </Text>
                    <Text fontSize="md" opacity={0.8}>
                      {subLabel}
                    </Text>
                  </Box>
                  <Box>
                    <Icon as={icon} w={5} h={5} minW={5} minH={5} />
                  </Box>
                </Flex>
              </ChakraLink>
            </NextLink>
          ))}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};
const MobileNav = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex="sticky" px={4}>
      {/* blur bg */}
      <Box
        _after={{
          content: '""',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          position: "absolute",
          backdropFilter: "blur(6px)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        zIndex={-1}
      ></Box>
      {/* navbar */}
      <Stack
        position="relative"
        zIndex={5}
        isInline={true}
        justifyContent="space-between"
        alignItems="center"
        py={3}
        px={2}
      >
        <NextLink href="/" passHref={true}>
          <ChakraLink _focus={{ outline: "none" }}>
            <Box w="full" minW={10} maxW={10} h="full">
              <Logo />
            </Box>
          </ChakraLink>
        </NextLink>
        <Button
          variant="ghost"
          color={useColorModeValue("purple.600", "purple.200")}
          px={0}
          _hover={{
            bg: useColorModeValue(
              "radial-gradient(circle 875px at 49.8% 64.3%,  rgba(254,251,255,0.8) 0%, rgba(244,221,255,0.85) 46.9%)",
              "radial-gradient(circle 875px at 49.8% 64.3%,  rgba(39,2,75,0.8) 2.2%, rgba(20,1,33,0.85) 20.2%, rgba(27,88,111,0.85) 58.6%, rgba(115,88,44,0.85) 75%, rgba(99,19,90,0.85) 89.6%, rgba(12,51,76,0.85) 96.1%)"
            ),
          }}
          _focus={{ outline: "none" }}
          onClick={onToggle}
        >
          <Icon as={RiMenuLine} w={7} h={7} />
        </Button>
      </Stack>
      <Box>
        <Divider
          borderColor={useColorModeValue(
            "rgba(235,173,254,0.25)",
            "rgba(235,173,254,0.2)"
          )}
        />
      </Box>
      {/* menu */}
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue(
            "radial-gradient(circle 875px at 49.8% 64.3%,  rgb(254,251,255) 0%, rgb(244,221,255) 46.9%)",
            "radial-gradient( circle farthest-corner at 10% 20%,  rgb(19,32,59) 0%, rgb(31,38,130) 90%)"
          )}
          color={useColorModeValue("purple.700", "purple.100")}
          pb={4}
        >
          <DrawerHeader>
            <Flex justify="space-between" align="center">
              <NextLink href="/" passHref={true}>
                <ChakraLink _focus={{ outline: "none" }}>
                  <Box w="full" minW={10} maxW={10} h="full">
                    <Logo />
                  </Box>
                </ChakraLink>
              </NextLink>
              <Stack isInline={true} alignItems="center" spacing={4}>
                <Button
                  variant="ghost"
                  color={useColorModeValue("purple.700", "purple.100")}
                  borderRadius="full"
                  _hover={{
                    bg: useColorModeValue("purple.200", "purple.700"),
                  }}
                  _focus={{ outline: "none" }}
                  onClick={toggleColorMode}
                  px={0}
                >
                  <Icon
                    as={colorMode === "light" ? RiMoonFill : RiSunFill}
                    w={4}
                    h={4}
                  />
                </Button>
                <Button
                  variant="ghost"
                  borderRadius="full"
                  color={useColorModeValue("purple.700", "purple.100")}
                  _hover={{
                    bg: useColorModeValue("purple.200", "purple.700"),
                  }}
                  _focus={{ outline: "none" }}
                  onClick={onClose}
                  px={0}
                >
                  <Icon as={RiCloseFill} w={6} h={6} />
                </Button>
              </Stack>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Accordion defaultIndex={0} allowToggle={true} allowMultiple={true}>
              <Stack>
                {NAV_ITEMS.map(({ label, icon, children }, i) => (
                  <MobileLinks
                    key={`${label}${i}`}
                    label={label}
                    icon={icon}
                    children={children}
                  />
                ))}
              </Stack>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", (e) => updateTarget(e));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", (e) => updateTarget(e));
  }, []);

  return targetReached;
};

const WithSubnavigation = () => {
  const navbar = useBreakpointValue({
    base: useMediaQuery(769) && <MobileNav />,
    md: useMediaQuery(992) && <MobileNav />,
    lg: <DesktopNav />,
  });
  return <Box h={{ base: "4rem", lg: "5rem" }}>{navbar}</Box>;
};

export default WithSubnavigation;
