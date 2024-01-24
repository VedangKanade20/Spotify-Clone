import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const HomeScreen = () => {
  return (
    <Flex direction="row" w="100vw" h="90vh" bgColor="#000000">
      <Sidebar />
    </Flex>
  );
};

export default HomeScreen;
