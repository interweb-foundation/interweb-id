import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Grid,
  GridItem,
  Icon,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
  RiCheckboxBlankCircleLine
} from 'react-icons/ri';

import { DefaultLink, MenuLinkButton } from '../default-component';
import { DisplayAccordionType, FloatingMenuPropsType } from '../types';

const DisplayAccordion = ({
  links,
  customLink,
  handleInputChange
}: DisplayAccordionType) => {
  return (
    <Grid h="full" templateRows="auto 1fr">
      <GridItem mb={3} px={4}>
        <Input
          minH={6}
          variant="outline"
          placeholder="Search"
          onChange={handleInputChange}
        />
      </GridItem>
      <Box
        pl={4}
        pr={2.5}
        h="full"
        overflowY="scroll"
        css={{
          // For Firefox
          scrollbarWidth: 'thin',
          // For Chrome and other browsers except Firefox
          '&::-webkit-scrollbar': {
            width: '8px',
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: useColorModeValue(
              'rgba(0,0,0,0.1)',
              'rgba(255,255,255,0.1)'
            ),
            borderRadius: '6px',
            border: '3px solid',
            borderColor: useColorModeValue('#fff', '#1A202C')
          }
        }}
      >
        {links.map(({ category, components }, i) => {
          return (
            <Accordion
              key={`${category[i]}`}
              defaultIndex={[0]}
              allowMultiple
              allowToggle
            >
              <AccordionItem key={category} border="none" _last={{ mb: 0 }}>
                {({ isExpanded }) => (
                  <Stack
                    spacing={isExpanded ? 0.5 : 1}
                    pb={isExpanded ? 4 : 0}
                    _last={{ pb: 0 }}
                  >
                    <AccordionButton
                      display="flex"
                      fontWeight="medium"
                      px={0}
                      py={1.5}
                      opacity={isExpanded ? 1 : 0.75}
                      _hover={{
                        bg: 'transparent',
                        opacity: isExpanded ? 1 : 0.85
                      }}
                      _focus={{ outline: 'none' }}
                    >
                      <Icon
                        as={isExpanded ? RiArrowDownSLine : RiArrowRightSLine}
                        mr={1.5}
                      />
                      <Text flex={1} textAlign="left">
                        {category}
                      </Text>
                    </AccordionButton>
                    <Stack spacing={1}>
                      {components.map(({ label, href }) => {
                        return (
                          <AccordionPanel key={label} p={0}>
                            {customLink ? (
                              customLink(label, href)
                            ) : (
                              <DefaultLink href={href}>
                                <MenuLinkButton
                                  text={label}
                                  icon={
                                    <Icon
                                      as={RiCheckboxBlankCircleLine}
                                      w={2}
                                      h={2}
                                      mr={0.5}
                                    />
                                  }
                                />
                              </DefaultLink>
                            )}
                          </AccordionPanel>
                        );
                      })}
                    </Stack>
                  </Stack>
                )}
              </AccordionItem>
            </Accordion>
          );
        })}
      </Box>
    </Grid>
  );
};

const DesktopSidebar = ({
  links,
  customLink,
  handleInputChange
}: DisplayAccordionType) => {
  return (
    <Stack
      position="absolute"
      left={4}
      top={4}
      bottom={4}
      borderRadius="lg"
      border="1px solid"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      minW={52}
      w="full"
      maxW={60}
      h="auto"
      pt={6}
      pb={3.5}
    >
      <DisplayAccordion
        links={links}
        customLink={customLink}
        handleInputChange={handleInputChange}
      />
    </Stack>
  );
};

const MobileDrawer = ({
  links,
  customLink,
  windowScroll,
  handleInputChange
}: DisplayAccordionType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="absolute"
      bottom={0}
      left={2}
      right={2}
      transition="all .8s ease-in-out"
      opacity={windowScroll ? 0.4 : 1}
    >
      <Button
        variant="unstyled"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        zIndex="dropdown"
        pt={1}
        pb={3.5}
        w="full"
        h="auto"
        lineHeight="shorter"
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="6px 6px 0 0"
        boxShadow={useColorModeValue(
          '0 0px 2px #e3e3e3, 0 0 16px -6px #c4c4c4',
          '0 -4px 5px #555'
        )}
        color={useColorModeValue('gray.700', 'white')}
        _focus={{ outline: 'none' }}
        _hover={{ opacity: 1 }}
        onClick={onOpen}
      >
        <Icon as={RiArrowUpSLine} w={6} h={6} />
        <Text mt={-1.5}>Components</Text>
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius="6px 6px 0 0" h="full">
          <Button
            variant="unstyled"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="fixed"
            h="auto"
            minH={12}
            w="full"
            lineHeight="shorter"
            color={useColorModeValue('gray.700', 'white')}
            opacity={windowScroll ? 0.6 : 1}
            _focus={{ outline: 'none' }}
            _hover={{ opacity: 1 }}
            onClick={onClose}
          >
            <Icon as={RiArrowDownSLine} w={6} h={6} />
          </Button>
          <Box position="absolute" top={12} left={4} right={4} bottom={4}>
            <DisplayAccordion
              links={links}
              customLink={customLink}
              handleInputChange={handleInputChange}
            />
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export const FloatingLayout = ({
  children,
  customLink,
  links,
  handleInputChange
}: FloatingMenuPropsType) => {
  const [windowScroll, setWindowScroll] = useState(false);

  useEffect(() => {
    // window.onscroll = () => setWindowScroll(true);
    setTimeout(() => {
      if (windowScroll) {
        setWindowScroll(false);
      }
    }, 600);
  }, [windowScroll]);

  return (
    <Grid
      templateColumns={{ lg: 'auto 1fr' }}
      templateRows="1fr"
      position="relative"
      w="full"
      h="full"
      p={4}
    >
      {/* desktop */}
      <Box display={{ base: 'none', lg: 'block' }} w={64} h="full">
        <DesktopSidebar
          handleInputChange={handleInputChange}
          links={links}
          customLink={customLink}
        />
      </Box>
      {/* content */}
      <Stack
        position="absolute"
        left={{ base: 4, lg: 64 }}
        right={4}
        top={4}
        bottom={4}
        overflow="hidden"
        pb={{ base: 12, lg: 0 }}
        pl={{ lg: 4 }}
      >
        <Box
          w="full"
          h="full"
          pr={1}
          overflowY="scroll"
          css={{
            // For Firefox
            scrollbarWidth: 'thin',
            // For Chrome and other browsers except Firefox
            '&::-webkit-scrollbar': {
              width: '10px',
              background: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
              background: useColorModeValue(
                'rgba(0,0,0,0.1)',
                'rgba(255,255,255,0.1)'
              ),
              borderRadius: '6px',
              border: '3px solid',
              borderColor: useColorModeValue('#fff', '#1A202C')
            }
          }}
          onScroll={() => setWindowScroll(true)}
        >
          {children}
        </Box>
      </Stack>
      {/* mobile */}
      <Box display={{ base: 'block', lg: 'none' }}>
        <MobileDrawer
          handleInputChange={handleInputChange}
          links={links}
          customLink={customLink}
          windowScroll={windowScroll}
        />
      </Box>
    </Grid>
  );
};
