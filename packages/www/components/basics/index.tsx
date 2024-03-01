import { Text, useColorModeValue } from "@chakra-ui/react";

export const H1 = ({ children }) => (<Text
    as="h1"
    mx="auto"
    maxW="3xl"
    fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
    fontWeight="extrabold"
    lineHeight={1.15}
    letterSpacing={{ base: "normal", md: "tight" }}
    color={useColorModeValue("purple.700", "purple.400")}
>
    {children}
</Text>);

export const H2 = ({ children }) => (<Text
    as="h2"
    mx="auto"
    maxW="3xl"
    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
    fontWeight="extrabold"
    lineHeight={1.15}
    letterSpacing={{ base: "normal", md: "tight" }}
>
    {children}
</Text>);

export const P = ({ children }) => (<Text
    maxW={{ md: "xl", lg: "4xl" }}
    fontSize={{ base: "md", md: "xl" }}
    color={useColorModeValue("purple.700", "purple.300")}
    opacity={0.9}
    p={3}
    pt={0}
>
    {children}
</Text>);

export const ColorfulText = ({ children }) => (<Text
    as="span"
    backgroundClip="text"
    backgroundImage="linear-gradient(87.9deg,  rgba(90,204,193,0.9) 9.7%, rgba(81,162,228,0.9) 45.5%, rgba(182,19,182,0.95) 92.5%)"
>
    {children}
</Text>);