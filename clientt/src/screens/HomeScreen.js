import { Divider, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const HomeScreen = () => {
  return (
    <Flex direction="row" maxW="100vw" h="90vh" bgColor="#000000" gap="3">
      <Sidebar />

      <Flex
        direction="column"
        w="90%"
        h="90vh"
        bgColor="#121212"
        borderRadius="12px"
        mr="1"
      >
        {/* Header */}
        <Flex
          direction="row"
          bgColor="#121212"
          w="80wh"
          h="7vh"
          borderRadius="12px"
        >
          <Flex w="100%" gap="2">
            <IoChevronBackCircleOutline color="white" size="50" />
            <IoChevronForwardCircleOutline color="white" size="50" />
          </Flex>
          <Flex
            direction="row "
            justifyItems="space-between"
            alignItems="center"
            gap="8"
          >
            <Flex
              gap="3"
              borderRadius="10px"
              alignItems="center"
              w="66px"
              h="40px"
            >
              <Text fontWeight="bold" as="h3" size="xl" color="white">
                Sign Up
              </Text>
            </Flex>
            <Divider orientation="vertical" size="2" />
            <Flex
              gap="3  "
              borderRadius="10px"
              w="66px"
              alignItems="center"
              h="40px"
            >
              <Text fontWeight="bold" as="h3" size="xl" color="white">
                Login
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* MAIN */}
        <Flex direction="column" bgColor="#1f1f1f" w="100%" h="100%">
          <Flex
            w="100%"
            h="5vh"
            alignItems="center"
            justifyContent="space-between"
            mt="10px"
          >
            <Flex w="fit-content">
              <Text textColor="gray" as="h3" fontWeight="bold" fontSize="2xl">
                Spotify Playlist
              </Text>
            </Flex>
            <Flex w="fit-content" justifyContent="end">
              <Text textColor="gray" as="h3" fontWeight="bold" fontSize="2xl">
                Show All
              </Text>
            </Flex>
          </Flex>

          <Grid templateRows="1fr 1fr 1fr 1fr" gap="6">
            <GridItem w="100px" h="50px" bgColor="blue.50" />
            <GridItem w="100px" h="50px" bgColor="blue.50" />
            <GridItem w="100px" h="50px" bgColor="blue.50" />
            <GridItem w="100px" h="50px" bgColor="blue.50" />
            <GridItem w="100px" h="50px" bgColor="blue.50" />
            <GridItem w="100px" h="50px" bgColor="blue.50" />
            <GridItem w="100px" h="50px" bgColor="blue.50" />
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
