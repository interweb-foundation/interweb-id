import {
  Box,
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
  useDisclosure
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

import { MainLayoutPropsType, MenuPropsType } from '../types';

const DesktopMenu = ({
  toggleColorMode,
  logo,
  linkList,
  connectButton,
  selectChainDropdown,
  copyAddressButton,
  connectedUserCard,
  children
}: MenuPropsType) => {
  return (
    <Box p={4}>
      <Flex
        position="sticky"
        top={4}
        right={4}
        left={4}
        py={4}
        w="full"
        zIndex={10000}
        bg={useColorModeValue('white', 'gray.900')}
        borderRadius="xl"
        boxShadow={useColorModeValue(
          '0 2px 1px #ececec, 1px 1px 3px #f1f1f1, 0 0 10px -5px #e6e6e6',
          '0 0 1px #828282, 2px 1px 20px -15px #404040, 0 0 5px -2px #212121'
        )}
        justify="space-between"
        align="center"
      >
        {logo}
        <Stack isInline={true} alignItems="center" spacing={6} px={6}>
          {selectChainDropdown}
          {copyAddressButton}
          <IconButton
            aria-label="color mode"
            variant="ghost"
            borderRadius="full"
            size="lg"
            icon={useColorModeValue(<FiMoon />, <FiSun />)}
            _focus={{ outline: 'none' }}
            onClick={toggleColorMode}
          />
        </Stack>
      </Flex>
      <Grid
        templateRows="1fr auto auto"
        gap={4}
        position="fixed"
        top={24}
        left={10}
        bottom={24}
        bg={useColorModeValue('gray.50', 'gray.700')}
        borderRadius="0 0 0.75rem 0.75rem"
        w="full"
        maxW={56}
        p={4}
        pt={8}
      >
        <Box
          h="full"
          overflow="scroll"
          css={{
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              width: 0
            }
          }}
        >
          {linkList}
        </Box>
        {connectedUserCard}
        {connectButton}
      </Grid>

      <Box
        position="fixed"
        top={28}
        left={64}
        bottom={1}
        right={6}
        overflow="scroll"
        css={{
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            width: 0
          }
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const MobileMenu = ({
  toggleColorMode,
  logo,
  linkList,
  connectButton,
  selectChainDropdown,
  copyAddressButton,
  connectedUserCard,
  children
}: MenuPropsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box>
      <Box position="relative" w="full" h={20}>
        <Flex
          position="fixed"
          zIndex="sticky"
          top={0}
          left={2}
          right={2}
          justify="space-between"
          align="center"
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={useColorModeValue(
            '0 1px 1px rgba(15, 15, 15, 0.1), 0 2px 5px -2px rgba(0, 0, 0, 0.15)',
            '0 1px 1px rgba(255, 255, 255, 0.15), 0 4px 3px -2px rgba(185, 185, 185, 0.1)'
          )}
          borderRadius="0 0 1rem 1rem"
          p={4}
        >
          {logo}
          <IconButton
            aria-label="Menu"
            variant="ghost"
            size="md"
            icon={<FiMenu />}
            _focus={{ outline: 'none' }}
            onClick={onOpen}
          />
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue('white', 'gray.800')} p={4}>
          <Grid
            position="relative"
            h="full"
            templateRows="auto auto 1fr auto"
            gap={4}
          >
            <Stack isInline={true} justify="end" spacing={4}>
              <IconButton
                aria-label="color mode"
                variant="ghost"
                borderRadius="full"
                size="md"
                icon={useColorModeValue(<FiMoon />, <FiSun />)}
                _focus={{ outline: 'none' }}
                onClick={toggleColorMode}
              />
              <IconButton
                aria-label="close menu"
                variant="ghost"
                size="md"
                icon={<FiX />}
                _focus={{ outline: 'none' }}
                onClick={onClose}
              />
            </Stack>
            <Stack>
              {selectChainDropdown}
              {copyAddressButton}
            </Stack>
            <Box
              position="relative"
              h="full"
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
              {linkList}
            </Box>
            <Stack position="sticky" left={0} right={0} bottom={6} pt={1.5}>
              {connectedUserCard}
              {connectButton}
            </Stack>
          </Grid>
        </DrawerContent>
      </Drawer>
      {children}
    </Box>
  );
};

export const MainLayout = ({
  children,
  logo,
  linkList,
  connectButton,
  selectChainDropdown,
  copyAddressButton,
  connectedUserCard
}: MainLayoutPropsType) => {
  const { toggleColorMode } = useColorMode();
  const layout = useBreakpointValue({
    base: (
      <MobileMenu
        toggleColorMode={toggleColorMode}
        logo={logo}
        linkList={linkList}
        connectButton={connectButton}
        selectChainDropdown={selectChainDropdown}
        copyAddressButton={copyAddressButton}
        connectedUserCard={connectedUserCard}
        children={children}
      />
    ),
    lg: (
      <DesktopMenu
        toggleColorMode={toggleColorMode}
        logo={logo}
        linkList={linkList}
        connectButton={connectButton}
        selectChainDropdown={selectChainDropdown}
        copyAddressButton={copyAddressButton}
        connectedUserCard={connectedUserCard}
        children={children}
      />
    )
  });
  return <>{layout}</>;
};
