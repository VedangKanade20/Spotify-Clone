import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const HomeScreen = () => {
  return (
    <Flex direction="row" w="100vw" h="100vh" bgColor="#000000">
      <Sidebar />
    </Flex>
  );
};

export default HomeScreen;
