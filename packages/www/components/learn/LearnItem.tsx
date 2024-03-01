import React, { useState, useEffect, ReactNode } from "react";
import {
  Box,
  useColorModeValue,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Icon,
  Stack,
  Tag,
  Wrap,
  Image,
  Grid,
  TagLeftIcon,
  WrapItem,
  Input,
  SystemStyleObject,
} from "@chakra-ui/react";
import { Select, MultiValue } from "chakra-react-select";
import {
  RiCloseFill,
  RiAddLine,
  RiSubtractLine,
  RiPriceTag3Line,
} from "react-icons/ri";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";
import { useRouter } from "next/router";
// To fix this error: https://github.com/cookpete/react-player/issues/1406
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

interface Avatar {
  author: string;
  uploadTime?: string;
}
interface LearnCarsType {
  title: string;
  subTitle?: string;
  description?: string;
  videoURL?: string;
  tags?: string[];
  displayAvatar?: boolean;
  avatar?: Avatar;
  handleClick?: (videoId?: string) => void;
}
type Tag = string;
type SelectOptionType = { label: Tag; value: Tag };

export const LearnFilter = ({ videoStore }: { videoStore: any }) => {
  function handleSelectChange(newValue: MultiValue<SelectOptionType>) {
    videoStore.setSelectedTags(newValue.map((opt) => opt.value));
  }
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    videoStore.setSearchText(event.target.value);
  }
  const customStyles = {
    control: (provided: SystemStyleObject) => ({
      ...provided,
      bg: useColorModeValue("whiteAlpha.800", "blackAlpha.400"),
      color: useColorModeValue("purple.500", "purple.300"),
      borderColor: useColorModeValue(
        "rgba(144,79,240,0.1)",
        "rgba(168,123,235,0.2)"
      ),
      _hover: {
        borderColor: useColorModeValue(
          "rgba(144,79,240,0.15)",
          "rgba(168,123,235,0.2)"
        ),
      },
      _focus: {
        borderColor: useColorModeValue(
          "rgba(144,79,240,0.3)",
          "rgba(168,123,235,0.4)"
        ),
        boxShadow: useColorModeValue(
          "inset 0 0 1px 1px rgba(144,79,240,0.3)",
          "inset 0 0 1px 1px rgba(168,123,235,0.4)"
        ),
      },
    }),
    placeholder: (provided: SystemStyleObject) => ({
      ...provided,
      color: useColorModeValue("purple.500", "purple.300"),
      opacity: 0.6,
    }),
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      mt: 2,
      mb: 0,
      bg: useColorModeValue("#ffffff", "#423157"),
      boxShadow: useColorModeValue(
        "0 1px 3px #f9efff, 0 2px 5px -1px #c2b5cf",
        "0 1px 3px -1px #4a0876, 0 2px 8px -2px #2f1243, 0 3px 6px -1px #221d1d"
      ),
      borderRadius: "0.3rem",
      zIndex: "dropdown",
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
      bg: "transparent",
      border: "none",
      borderRadius: "none",
      p: 2,
      // For Firefox
      scrollbarWidth: "auto",
      scrollbarColor: useColorModeValue(
        "rgba(0,0,0,0.3) rgba(0,0,0,0.2)",
        "rgba(255,255,255,0.2) rgba(255,255,255,0.1)"
      ),
      // For Chrome and other browsers except Firefox
      "&::-webkit-scrollbar": {
        width: "14px",
        background: useColorModeValue(
          "rgba(220,220,220,0.1)",
          "rgba(60,60,60,0.1)"
        ),
        borderRadius: "3px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: useColorModeValue(
          "rgba(0,0,0,0.1)",
          "rgba(255,255,255,0.1)"
        ),
        borderRadius: "10px",
        border: "3px solid transparent",
        backgroundClip: "content-box",
      },
    }),
    option: (provided: SystemStyleObject, { isSelected }) => ({
      ...provided,
      borderRadius: 4,
      mb: 1,
      color: useColorModeValue("purple.800", "purple.200"),
      bg: isSelected
        ? useColorModeValue("purple.100", "purple.700")
        : "transparent",
      _hover: {
        bg: isSelected
          ? useColorModeValue("purple.100", "purple.700")
          : useColorModeValue("purple.50", "whiteAlpha.50"),
      },
      _last: {
        mb: 0,
      },
    }),
    dropdownIndicator: (provided: SystemStyleObject) => ({
      ...provided,
      pl: 2,
      pr: 4,
      bg: "transparent",
      opacity: 0.4,
    }),
    clearIndicator: (provided: SystemStyleObject) => ({
      ...provided,
      color: useColorModeValue("#b9a2eb", "#7d63b0"),
      borderRadius: "full",
      ">svg": {
        width: 2.5,
        height: 2.5,
      },
      _hover: {
        bg: useColorModeValue("purple.50", "purple.900"),
      },
    }),
    multiValue: (provided: SystemStyleObject) => ({
      ...provided,
      bg: useColorModeValue("purple.100", "purple.700"),
    }),
  };
  const IndicatorSeparator = () => {
    return null;
  };

  return (
    <Grid
      position="relative"
      zIndex={10}
      templateColumns={{ md: "1fr repeat(2, minmax(20rem, 1fr))" }}
      gap={{ base: 3, md: 4 }}
      px={6}
    >
      <Box display={{ base: "none", md: "flex" }}></Box>
      <Box w="full" maxW={{ md: 80 }} justifySelf="end">
        <Select
          name="tags"
          placeholder="Filter Tags"
          selectedOptionColor="purple"
          isMulti={true}
          hideSelectedOptions={false}
          options={videoStore.availableTags.map((tag: Tag) => ({
            label: tag,
            value: tag,
            colorScheme: "purple",
          }))}
          onChange={handleSelectChange}
          chakraStyles={customStyles}
          components={{
            IndicatorSeparator,
          }}
        />
      </Box>
      <Box w="full" maxW={{ md: 80 }} justifySelf="end">
        <Input
          type="text"
          placeholder="Search Video"
          _placeholder={{
            color: useColorModeValue("purple.600", "purple.300"),
            opacity: 0.6,
          }}
          bg={useColorModeValue("whiteAlpha.800", "blackAlpha.400")}
          color={useColorModeValue("purple.500", "purple.300")}
          borderColor={useColorModeValue(
            "rgba(144,79,240,0.1)",
            "rgba(168,123,235,0.2)"
          )}
          _hover={{
            borderColor: useColorModeValue(
              "rgba(144,79,240,0.15)",
              "rgba(168,123,235,0.2)"
            ),
          }}
          _focus={{
            borderColor: useColorModeValue(
              "rgba(144,79,240,0.3)",
              "rgba(168,123,235,0.4)"
            ),
            boxShadow: useColorModeValue(
              "inset 0 0 1px 1px rgba(144,79,240,0.3)",
              "inset 0 0 1px 1px rgba(168,123,235,0.4)"
            ),
          }}
          onChange={handleSearchChange}
        />
      </Box>
      <Box display={{ base: "none", md: "flex" }}></Box>
    </Grid>
  );
};

export const LearnCard = ({
  title,
  subTitle,
  description,
  tags: defaultTag,
  videoURL,
  displayAvatar,
  avatar,
}: LearnCarsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: moreTags, onToggle: handleShowTags } = useDisclosure();
  const router = useRouter();
  const [tags, setTags] = useState<string[]>([]);
  const [tagMoreButton, setTagMoreButton] = useState(false);

  function handleCloseModal() {
    router.push("/learn");
    onClose();
  }

  useEffect(() => {
    if (defaultTag.length > 5) {
      setTags(defaultTag.slice(0, 4));
      setTagMoreButton(true);
    }
  }, [defaultTag]);
  useEffect(() => {
    if (moreTags) setTags(defaultTag);
    if (!moreTags) setTags(defaultTag.slice(0, 4));
  }, [moreTags, tagMoreButton]);

  return (
    <Stack
      id={title}
      position="relative"
      bg={useColorModeValue("whiteAlpha.800", "blackAlpha.700")}
      borderRadius="lg"
      boxShadow={useColorModeValue(
        "0 2px 5px #f6ecfd",
        "0 1px 6px -2px #be8be1"
      )}
      w="full"
      h="full"
      spacing={0}
      overflow="hidden"
      p={4}
      onClick={onOpen}
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
          bg={useColorModeValue("whiteAlpha.400", "blackAlpha.400")}
        ></Box>
        <Modal
          isOpen={isOpen}
          isCentered={true}
          onClose={() => handleCloseModal()}
        >
          <ModalOverlay />
          <ModalContent w="full" maxW={{ lg: "60vw" }} mx={4}>
            <ModalHeader>
              <Flex justify="space-between" align="center">
                <Text>{title}</Text>
                <Button
                  variant="ghost"
                  px={0}
                  _focus={{ outline: "none" }}
                  onClick={() => handleCloseModal()}
                >
                  <Icon as={RiCloseFill} w={5} h={5} />
                </Button>
              </Flex>
            </ModalHeader>
            <ModalBody pb={6}>
              <Box w="full" h={{ md: "calc((60vw/16)*9)" }}>
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
        fontSize={{ base: "xs", lg: "sm" }}
        opacity={0.5}
        pb={1}
      >
        {subTitle}
      </Text>
      <Text fontWeight="bold" fontSize={{ base: "lg", lg: "xl" }} pb={1.5}>
        {title}
      </Text>
      <Box
        flex="auto"
        overflowY="scroll"
        h="full"
        maxH={28}
        css={{
          // For Firefox
          scrollbarWidth: "auto",
          scrollbarColor: useColorModeValue(
            "rgba(0,0,0,0.3) rgba(0,0,0,0.2)",
            "rgba(255,255,255,0.2) rgba(255,255,255,0.1)"
          ),
          // For Chrome and other browsers except Firefox
          "&::-webkit-scrollbar": {
            width: "14px",
            background: "transparent",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: useColorModeValue(
              "rgba(0,0,0,0.1)",
              "rgba(255,255,255,0.1)"
            ),
            borderRadius: "6px",
            border: "2px solid transparent",
            backgroundClip: "content-box",
          },
        }}
      >
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          lineHeight={1.3}
          opacity={0.7}
        >
          {description}
        </Text>
      </Box>
      <Box flex="auto">
        <Wrap spacing={2} py={4}>
          {tags.map((text, i) => (
            <WrapItem key={`${text}${i}`}>
              <Tag size="sm" lineHeight={2} colorScheme="purple" opacity={0.8}>
                <TagLeftIcon as={RiPriceTag3Line} mr={1} />
                {text}
              </Tag>
            </WrapItem>
          ))}
          {tagMoreButton && (
            <WrapItem>
              <Button
                size="xs"
                _focus={{ outline: "none" }}
                onClick={handleShowTags}
              >
                {moreTags ? "Less" : "More"}&nbsp;
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
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
              {avatar.author}
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
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
};

export const LearnGrid = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      justifyContent="center"
      templateColumns={{
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={{ base: 8, lg: 4 }}
    >
      {children}
    </Grid>
  );
};
