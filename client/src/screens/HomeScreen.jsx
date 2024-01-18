import { Flex, Grid, Heading } from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <Flex direction="row" w="100vw" h="100vh" bgColor="#000000">
      <Flex /* SideBAR */
        direction="column"
        w="300px"
        h="100vh"
        alignItems="start"
        bgColor="green.400"
      >
        <Flex direction="column">
          <Grid height="300px" templateColumns="repeat(2, 1fr)">
            <Flex bgColor="yellow"></Flex>
            <Flex bgColor="red"></Flex>
          </Grid>
        </Flex>
      </Flex>
      <Flex w="500px" h="100vh">
        <Heading>Hello</Heading>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
