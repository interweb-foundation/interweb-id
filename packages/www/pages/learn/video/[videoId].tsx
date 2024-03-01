import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { RiCloseFill } from "react-icons/ri";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

import { videos } from "../../../stores/data/videos";
import Layout from "../../../components/Layout";
import { Head } from "../../../components/seo/Head";

// To fix this error: https://github.com/cookpete/react-player/issues/1406
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

type Avatar = {
  author: string;
  uploadTime?: string;
};

interface Video {
  id: string;
  title: string;
  subTitle?: string;
  description?: string;
  videoURL?: string;
  tags?: string[];
  avatar?: Avatar;
}

const VideoPage = observer(({ videoId }: { videoId: string }) => {
  const { onClose } = useDisclosure();
  const router = useRouter();
  const [selectedVideo, setSelectedVideo] = useState<Video>();

  function handleClose() {
    router.push("/learn");
    onClose();
  }

  useEffect(() => {
    setSelectedVideo(videos.filter(({ id }) => id === videoId)[0]);
    router.prefetch("/learn");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head
        title={selectedVideo?.title || videoId}
        description={selectedVideo?.description}
        route={`/learn/video/${videoId}`}
      />
      <Layout>
        <Modal isOpen={true} onClose={handleClose} isCentered={true}>
          <ModalOverlay />
          <ModalContent w="full" maxW={{ lg: "60vw" }} mx={4}>
            <ModalHeader>
              <Flex justify="space-between" align="center">
                <Text>{selectedVideo?.title || "title"}</Text>
                <Button
                  variant="ghost"
                  px={0}
                  _focus={{ outline: "none" }}
                  onClick={handleClose}
                >
                  <Icon as={RiCloseFill} w={5} h={5} />
                </Button>
              </Flex>
            </ModalHeader>
            <ModalBody pb={6}>
              <Box w="full" h={{ md: "calc((60vw/16)*9)" }}>
                <ReactPlayer
                  url={selectedVideo?.videoURL || ""}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Layout>
    </>
  );
});

export default VideoPage;

export function getStaticProps({ params: { videoId } }) {
  return { props: { videoId } };
}

export function getStaticPaths() {
  return {
    paths: videos.map(({ id }) => ({
      params: { videoId: id },
    })),
    fallback: false,
  };
}
