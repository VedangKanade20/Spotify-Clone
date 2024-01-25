import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const HomeScreen = () => {
  return (
    <Flex direction="row" w="100vw" h="90vh" bgColor="#000000">
      <Sidebar />
      <Divider orientation="vertical" h="90vh" />
      <Flex
        direction="column"
        w="100%"
        h="90vh"
        bgColor="#121212"
        borderRadius="12px"
      >
        {/* Header */}
        <Flex
          direction="row"
          bgColor="gray"
          w="100% "
          h="7vh"
          borderRadius="12px"
        >
          <Flex w="fit-content" gap="2">
            <IoChevronBackCircleOutline color="white" size="50" />
            <IoChevronForwardCircleOutline color="white" size="50" />
          </Flex>
          <Flex justifyContent="right">
            <Flex direction="row" gap="5">
              <Text>Premium</Text>
              <Text>Support</Text>
              <Text>Download</Text>
            </Flex>
            <Divider orientation="vertical" size="5vh" />
            <Flex direction="row" gap="5" borderRadius="10px" bgColor="black">
              <Text>Login</Text>
              <Text>Sign up</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
