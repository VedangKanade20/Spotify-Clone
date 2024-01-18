import { Flex, Heading } from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <Flex direction="row" w="100vw" h="100vh" bgColor="#000000">
      <Flex /* SideBAR */
        direction="column"
        w="300px"
        h="100vh"
        alignItems="center"
        bgColor="green.400"
      ></Flex>
      <Flex w="100vw" h="100vh">
        <Heading>Hello</Heading>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
