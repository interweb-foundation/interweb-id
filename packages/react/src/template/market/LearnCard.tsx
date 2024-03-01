import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tag,
  TagLeftIcon,
  Text,
  useColorMode,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  RiAddLine,
  RiCloseFill,
  RiPriceTag3Line,
  RiSubtractLine
} from 'react-icons/ri';
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from 'react-player/types/lib';

import { handleChangeColorModeValue } from '../../default-component';
import { LearnCarsType } from '../../types';
// To fix this error: https://github.com/cookpete/react-player/issues/1406
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function LearnCard({
  title,
  subTitle,
  description,
  tags: defaultTag,
  videoURL,
  displayAvatar,
  avatar
}: LearnCarsType) {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: moreTags, onToggle: handleShowTags } = useDisclosure();
  const [tags, setTags] = useState<string[]>([]);
  const [tagMoreButton, setTagMoreButton] = useState(false);

  useEffect(() => {
    if (defaultTag.length > 5) {
      setTags(defaultTag.slice(0, 4));
      setTagMoreButton(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultTag]);
  useEffect(() => {
    if (moreTags) setTags(defaultTag);
    if (!moreTags) setTags(defaultTag.slice(0, 4));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moreTags, tagMoreButton]);

  return (
    <Stack
      position="relative"
      borderRadius="lg"
      boxShadow={handleChangeColorModeValue(
        colorMode,
        '0 2px 5px #e1e1e1',
        '0 1px 6px -2px #686868'
      )}
      w="full"
      overflow="hidden"
      spacing={0}
      p={4}
    >
      {/* player */}
      <Box position="relative" m={-4} mb={4}>
        <Box
          as="button"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={handleChangeColorModeValue(
            colorMode,
            'whiteAlpha.400',
            'blackAlpha.400'
          )}
          onClick={onOpen}
        ></Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w="full" maxW={{ lg: '60vw' }} mx={4}>
            <ModalHeader>
              <Flex justify="space-between" align="center">
                <Text>{title}</Text>
                <Button
                  variant="ghost"
                  px={0}
                  _focus={{ outline: 'none' }}
                  onClick={onClose}
                >
                  <Icon as={RiCloseFill} w={5} h={5} />
                </Button>
              </Flex>
            </ModalHeader>
            <ModalBody pb={6}>
              <Box w="full" h={{ md: 'calc((60vw/16)*9)' }}>
                <ReactPlayer
                  url={videoURL}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Box h={{ base: 48, md: 52, lg: 44 }}>
          <ReactPlayer url={videoURL} width="100%" height="100%" light={true} />
        </Box>
      </Box>
      <Text
        fontWeight="medium"
        fontSize={{ base: 'xs', lg: 'sm' }}
        opacity={0.5}
        pb={1}
      >
        {subTitle}
      </Text>
      <Text fontWeight="bold" fontSize={{ base: 'lg', lg: 'xl' }} pb={1.5}>
        {title}
      </Text>
      <Box
        flex="auto"
        overflowY="scroll"
        h="full"
        maxH={28}
        css={{
          // For Firefox
          scrollbarWidth: 'auto',
          scrollbarColor: handleChangeColorModeValue(
            colorMode,
            'rgba(0,0,0,0.3) rgba(0,0,0,0.2)',
            'rgba(255,255,255,0.2) rgba(255,255,255,0.1)'
          ),
          // For Chrome and other browsers except Firefox
          '&::-webkit-scrollbar': {
            width: '14px',
            background: 'transparent',
            borderRadius: '3px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: handleChangeColorModeValue(
              colorMode,
              'rgba(0,0,0,0.1)',
              'rgba(255,255,255,0.1)'
            ),
            borderRadius: '6px',
            border: '2px solid transparent',
            backgroundClip: 'content-box'
          }
        }}
      >
        <Text
          fontSize={{ base: 'sm', lg: 'md' }}
          lineHeight={1.3}
          opacity={0.7}
        >
          {description}
        </Text>
      </Box>
      <Box flex={moreTags ? 'auto' : 1}>
        <Wrap spacing={2} py={4}>
          {tags.map((text) => (
            <WrapItem>
              <Tag size="sm" lineHeight={2}>
                <TagLeftIcon as={RiPriceTag3Line} mr={1} />
                {text}
              </Tag>
            </WrapItem>
          ))}
          {tagMoreButton && (
            <WrapItem>
              <Button
                size="xs"
                _focus={{ outline: 'none' }}
                onClick={handleShowTags}
              >
                {moreTags ? 'Less' : 'More'}&nbsp;
                <Icon as={moreTags ? RiSubtractLine : RiAddLine} />
              </Button>
            </WrapItem>
          )}
        </Wrap>
      </Box>
      {displayAvatar && (
        <Stack isInline={true} align="center">
          <Box
            minW={{ base: 10, lg: 12 }}
            w={{ base: 10, lg: 12 }}
            maxW={{ base: 10, lg: 12 }}
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="https://imgflip.com/s/meme/Smiling-Cat.jpg"
              fallbackSrc="https://dummyimage.com/400x400/000/fff&text=Avatar"
            />
          </Box>
          <Box>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
              {avatar.author}
            </Text>
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight="medium"
              opacity={0.4}
            >
              {avatar.uploadTime}
            </Text>
          </Box>
        </Stack>
      )}
    </Stack>
  );
}
