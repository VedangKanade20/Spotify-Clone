import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const HomeScreen = () => {
  return (
    <Flex direction="row" maxW="100vw" h="90vh" bgColor="#000000" gap="3">
      <Sidebar />

      <Flex
        direction="column"
        w="100%"
        h="90vh"
        bgColor="#121212"
        borderRadius="12px"
        mr="2"
      >
        {/* Header */}
        <Flex
          direction="row"
          bgColor="#121212"
          w="100% "
          h="7vh"
          borderRadius="12px"
        >
          <Flex w="73vw" gap="2">
            <IoChevronBackCircleOutline color="white" size="50" />
            <IoChevronForwardCircleOutline color="white" size="50" />
          </Flex>
          <Flex direction="row " justifyItems="end" alignItems="center" gap="3">
            <Flex
              direction="row"
              gap="3"
              borderRadius="10px"
              alignItems="center"
              w="60px"
            >
              <Text fontWeight="bold" as="h3" size="xl" color="white">
                Sign Up
              </Text>
            </Flex>
            <Divider orientation="vertical" size="2" />
            <Flex direction="row" gap="5" borderRadius="10px" w="40px">
              <Text fontWeight="bold" as="h3" size="xl" color="white">
                Login
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* MAIN */}
        <Flex direction="column" bgColor="#1f1f1f" w="100%" h="100%">
          <Flex
            w="83vw"
            h="5vh"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex w="fit-content">
              <Text textColor="white" as="h3" fontWeight="bold" size="xl">
                Spotify Playlist
              </Text>
            </Flex>
            <Flex w="fit-content" justifyContent="end">
              <Text textColor="white" as="h3" fontWeight="bold" size="xl">
                Show All
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
