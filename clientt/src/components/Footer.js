import { Divider, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100vw"
      h="10vh"
      direction="row"
      py="1"
      bgGradient="linear(to-r, pink.500, purple.500)"
      borderRadius="10"
    >
      <Flex direction="column" alignContent="start" w="95vw">
        <Flex>
          <Text fontFamily="sans-serif" fontSize="xl">
            Preview of Spotify
          </Text>
        </Flex>
        <Divider orientation="horizontal" color="black" w="51vw" />
        <Flex>
          <Text fontFamily="sans-serif" fontSize="xl">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card Needed.
          </Text>
        </Flex>
      </Flex>
      <Flex
        bgGradient="linear(to-r, pink.500, purple.500)"
        borderRadius="10"
        textAlign="center"
        _hover={{
          bgGradient: "linear(to-r, purple.600, purple.400)",
          cursor: "pointer",
        }}
      >
        <Text fontFamily="sans-serif" fontSize="xl">
          SignUp
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
