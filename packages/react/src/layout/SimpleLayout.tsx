import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  IconButton,
  Stack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDimensions,
  useDisclosure
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { FiChevronLeft, FiMenu, FiMoon, FiSun } from 'react-icons/fi';

import {
  DefaultLink,
  handleChangeColorModeValue,
  MenuLinkButton
} from '../default-component';
import { SimpleLayoutMenuType, SimpleLayoutType } from '../types';

const SIZES = {
  lg: {
    colorModeIconSize: 'lg',
    linkSize: 12,
    linkFontSize: 'xl'
  },
  md: {
    colorModeIconSize: 'md',
    linkSize: 10,
    linkFontSize: 'lg'
  },
  sm: {
    colorModeIconSize: 'sm',
    linkSize: 8,
    linkFontSize: 'md'
  }
};

const MobileMenu = ({
  isFullWidth,
  logo,
  connectButton,
  links,
  customLink,
  chainDropdown,
  copyAddressButton,
  toggleColorMode,
  children
}: SimpleLayoutMenuType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      {/* navbar */}
      <Flex
        justify="space-between"
        position="fixed"
        align="center"
        top={0}
        left={0}
        right={0}
        minH={12}
        py={2.5}
        px={4}
        zIndex="sticky"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={useColorModeValue(
          '0 2px 2px -1px #d8d8d8',
          '0 2px 2px -1px #181818, 0 3px 5px -4px #0b0b0b'
        )}
      >
        <IconButton
          aria-label="menu"
          variant="outline"
          icon={<FiMenu opacity={0.8} />}
          _focus={{ outline: 'none' }}
          onClick={onOpen}
        />
        {logo}
        <IconButton
          aria-label="color mode"
          variant="outline"
          icon={useColorModeValue(
            <FiMoon opacity={0.6} />,
            <FiSun opacity={0.8} />
          )}
          _focus={{ outline: 'none' }}
          onClick={toggleColorMode}
        />
      </Flex>
      {/* drawer */}
      <Drawer
        placement="left"
        isFullHeight={true}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent maxW={isFullWidth ? 'full' : 'xs'}>
          <Grid
            templateRows="auto 1fr auto"
            position="absolute"
            top={0}
            right={0}
            left={0}
            bottom={0}
          >
            <Flex justify="end" p={4}>
              <IconButton
                aria-label="close"
                icon={<FiChevronLeft opacity={0.7} />}
                variant="outline"
                fontSize="xl"
                borderRadius="lg"
                _focus={{ outline: 'none' }}
                onClick={onClose}
              />
            </Flex>
            <Box position="relative">
              <Stack
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                pl={4}
                pr={2}
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
                    borderColor: useColorModeValue('#fff', '#2D3748')
                  }
                }}
              >
                {links.map(({ label, href, icon }) => (
                  <>
                    {customLink ? (
                      customLink(label, href)
                    ) : (
                      <DefaultLink href={href}>
                        <MenuLinkButton text={label} icon={icon} />
                      </DefaultLink>
                    )}
                  </>
                ))}
              </Stack>
            </Box>
            <Box position="relative" bottom={0} left={0} right={0} p={4}>
              {connectButton}
            </Box>
          </Grid>
        </DrawerContent>
      </Drawer>
      {/* content */}
      <Box
        position="fixed"
        top="3.75rem"
        bottom={16}
        left={0}
        right={0}
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
      >
        {children}
      </Box>
      <Box
        position="fixed"
        bottom={0}
        left={1}
        right={1}
        p={4}
        display="flex"
        justifyContent="center"
        zIndex="dropdown"
        w="auto"
        h="auto"
        lineHeight="shorter"
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="6px 6px 0 0"
        boxShadow={useColorModeValue(
          '0 0px 2px #e3e3e3, 0 0 16px -6px #c4c4c4',
          '0 -4px 5px #555'
        )}
        color={useColorModeValue('gray.700', 'white')}
      >
        <Stack w="full">
          <Box flex={1}>{chainDropdown}</Box>
          {copyAddressButton && (
            <Box flex={1} justifyContent="center" alignItems="center" h={8}>
              {copyAddressButton}
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

const DesktopMenu = ({
  size,
  logo,
  connectButton,
  links,
  customLink,
  chainDropdown,
  copyAddressButton,
  toggleColorMode,
  children
}: SimpleLayoutMenuType) => {
  const { colorMode } = useColorMode();
  const navContentDimensions = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(navContentDimensions);
  const colorModeIcon = useColorModeValue(
    <FiMoon opacity={0.6} />,
    <FiSun opacity={0.7} />
  );

  return (
    <Flex>
      {/* sidebar */}
      <Stack
        spacing={4}
        position="fixed"
        top={0}
        bottom={0}
        left={0}
        minW={52}
        w="full"
        maxW={60}
        boxShadow={handleChangeColorModeValue(
          colorMode,
          '1px 0 1px #E2E8F0',
          '1px 0 1px rgba(255, 255, 255, 0.16)'
        )}
      >
        {logo && (
          <Flex justify="center" align="center" p={4} pb={0}>
            {logo}
          </Flex>
        )}
        <Stack
          flex={1}
          pl={4}
          pr={1.5}
          py={2}
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
        >
          {links.map(({ label, href, icon }) => {
            return (
              <>
                {customLink ? (
                  customLink(label, href)
                ) : (
                  <DefaultLink href={href}>
                    <MenuLinkButton text={label} icon={icon} size={size} />
                  </DefaultLink>
                )}
              </>
            );
          })}
        </Stack>
        {connectButton && (
          <Center position="relative" w="full" h={20} p={4} pt={2}>
            {connectButton}
          </Center>
        )}
      </Stack>
      {/* navbar */}
      <Box position="fixed" top={0} left={60} right={0} zIndex="sticky" px={4}>
        <Stack
          isInline={true}
          justifyContent="end"
          alignItems="center"
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={handleChangeColorModeValue(
            colorMode,
            '0 1px 1px #E2E8F0',
            '0 1px 1px rgba(255, 255, 255, 0.16)'
          )}
          py={4}
        >
          <Box ref={navContentDimensions} w="full" maxW={72}>
            {chainDropdown}
          </Box>
          {copyAddressButton && (
            <Center
              justifyContent="center"
              alignItems="center"
              w="full"
              maxW={60}
              minW="fit-content"
            >
              {copyAddressButton}
            </Center>
          )}
          <IconButton
            display="flex"
            aria-label="color mode"
            variant="outline"
            w={dimensions ? `${dimensions.borderBox.height}px` : 8}
            h={dimensions ? `${dimensions.borderBox.height}px` : 8}
            minH="auto"
            borderRadius="lg"
            icon={colorModeIcon}
            fontSize={SIZES[size].colorModeIconSize}
            _hover={{
              bg: handleChangeColorModeValue(
                colorMode,
                'blackAlpha.50',
                'whiteAlpha.100'
              )
            }}
            _focus={{ outline: 'none' }}
            onClick={toggleColorMode}
          />
        </Stack>
      </Box>
      {/* content */}
      <Box
        position="fixed"
        top={20}
        left={60}
        bottom={0}
        right={0}
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
      >
        <Box p={4}>{children}</Box>
      </Box>
    </Flex>
  );
};

export const SimpleLayout = ({
  size = 'md',
  logo,
  connectButton,
  links,
  customLink,
  chainDropdown,
  copyAddressButton,
  isFullWidth,
  children
}: SimpleLayoutType) => {
  const { toggleColorMode } = useColorMode();
  const layout = useBreakpointValue({
    base: (
      <MobileMenu
        isFullWidth={isFullWidth}
        logo={logo}
        connectButton={connectButton}
        links={links}
        customLink={customLink}
        chainDropdown={chainDropdown}
        copyAddressButton={copyAddressButton}
        children={children}
        toggleColorMode={toggleColorMode}
      />
    ),
    lg: (
      <DesktopMenu
        size={size}
        logo={logo}
        connectButton={connectButton}
        links={links}
        customLink={customLink}
        chainDropdown={chainDropdown}
        copyAddressButton={copyAddressButton}
        children={children}
        toggleColorMode={toggleColorMode}
      />
    )
  });

  return <Box>{layout}</Box>;
};
