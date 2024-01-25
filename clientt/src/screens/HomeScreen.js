import { Divider, Flex, Heading } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const HomeScreen = () => {
  return (
    <Flex direction="row" w="100vw" h="90vh" bgColor="#000000">
      <Sidebar />
      <Divider orientation="vertical" h="90vh" />
      <Flex w="83vw" h="90vh" bgColor="#121212" borderRadius="10">
        <Heading textColor="white">hello</Heading>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
