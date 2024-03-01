import React from "react";
import NextLink from "next/link";
import { Box, Center, Link as ChakraLink } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks";

import { LearnFilter, LearnCard, LearnGrid } from "./LearnItem";

const LearnList = observer(() => {
  const { videoStore } = useStore();

  return (
    <Center pb={32}>
      <Box w="full" maxW="5xl" px={6}>
        <Box
          position="sticky"
          top={16}
          zIndex={5}
          mx={-6}
          pt={{ base: 4, md: 6 }}
          pb={{ base: 4, md: 3 }}
          mb={6}
        >
          <LearnFilter videoStore={videoStore} />
          <Box
            _after={{
              content: '""',
              backgroundPosition: "center center",
              backgroundSize: "cover",
              position: "absolute",
              backdropFilter: "blur(10px)",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 0,
            }}
          ></Box>
        </Box>
        <LearnGrid>
          {videoStore.matchedVideos.map(
            ({ id, title, subTitle, description, videoURL, tags, avatar }) => {
              return (
                <NextLink
                  key={id}
                  href={`/learn?videoId=${id}`}
                  as={`/learn/video/${id}`}
                  passHref={true}
                >
                  <ChakraLink
                    _hover={{ textDecoration: "none" }}
                    _focus={{ outline: "none" }}
                  >
                    <LearnCard
                      title={title}
                      subTitle={subTitle}
                      description={description}
                      videoURL={videoURL}
                      tags={tags}
                      avatar={avatar}
                    />
                  </ChakraLink>
                </NextLink>
              );
            }
          )}
        </LearnGrid>
      </Box>
    </Center>
  );
});

export default LearnList;
