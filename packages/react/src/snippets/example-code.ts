export default `import React from "react";
import {
  Grid,
  GridItem,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { LogoCloudType } from "../../types";

export default function LogoCloud({ logos }: LogoCloudType) {
  return (
    <Stack alignItems="center" gap={{ base: 4, lg: 8 }}>
      <GridItem textAlign="center">
        <Heading mb={2}>These and other companies trust us</Heading>
        <Text fontSize={{ base: "md", lg: "xl" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Text>
      </GridItem>
      <Grid
        w="full"
        templateColumns={{
          md: "repeat(2, minmax(10rem, 1fr))",
          lg: "repeat(3, minmax(10rem, 1fr))",
        }}
        gap={3}
      >
        {logos.map((icon) => (
          <GridItem
            bg={useColorModeValue("primary.50", "primary.600")}
            boxShadow={useColorModeValue(
              "0 1px 5px #e8e8e8",
              "0 2px 5px -2px #7e7e7e"
            )}
            borderRadius="md"
            p={4}
          >
            <Stack
              isInline={true}
              justifyContent="center"
              alignItems="center"
              fontSize={{ base: "xl", lg: "2xl" }}
              opacity={0.7}
            >
              <Icon as={icon} />
              <Text>brand name</Text>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}
`;
