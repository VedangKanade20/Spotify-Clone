import { Flex, Text, Heading } from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <Flex direction="row">
      <Flex
        direction="column"
        w="350px"
        h="720"
        alignItems="start"
        bgColor="green.400"
      >
        <Heading as="h1" size="2xl">
          Spotify Clone
        </Heading>
      </Flex>
      <Flex h="720" w="1200px" bgColor="black">
        <Heading color="green.400" as="h1" size="2xl">
          {" "}
          Gana sun na re :{" "}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
