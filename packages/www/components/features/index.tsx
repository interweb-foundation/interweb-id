import React from "react";
import {
    chakra,
    Box,
    Flex,
    SimpleGrid,
    useColorModeValue,
    Icon,
} from "@chakra-ui/react";

import { features } from "./features";

const FeatureCard = (props) => {
    return (
        <Box>
            <Flex
                justifyContent="center"
                alignItems="center"
                mb={4}
                fontSize="3xl"
                color={useColorModeValue("purple.700", "purple.400")}
                fill="none"
                stroke="currentColor" >
                {props.icon}
            </Flex>
            <chakra.h3
                mb={3}
                fontSize="lg"
                lineHeight="shorter"
                fontWeight="bold"
                opacity={useColorModeValue(0.9, 0.8)}
            >
                {props.title}
            </chakra.h3>
            <chakra.p lineHeight="tall" opacity={useColorModeValue(0.75, 0.6)}>
                {props.description}
            </chakra.p>
        </Box >
    );
};

const Feature = () => {
    return (
        <Box mx="auto">
            <SimpleGrid
                mx="auto"
                w="full"
                maxW="6xl"
                columns={{ base: 1, lg: 3 }}
                spacing={{ base: 16, md: 20, lg: 24 }}
                px={{ base: 8, md: 10, lg: 20 }}
                py={{ base: 16, lg: 20 }}
                bg={useColorModeValue("white", "purple.800")}
                shadow="xl"
            >
                {features.map(feature => (
                    <FeatureCard
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Feature;
