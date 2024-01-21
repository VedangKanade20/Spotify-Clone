import { Divider, Image, Flex, Heading, Grid, Text } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import IMAGE from "../images/mainLOGO.png";
import { Link } from "react-router-dom";
import { LuLibrary } from "react-icons/lu";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      w="15vw"
      bgColor="gray.600"
      borderRadius="15"
    >
      {/* 1st Section */}
      <Flex
        dir="column"
        gap="25px"
        alignItems="center"
        alignContent="center"
        mt="25px"
        w="10vw"
        h="5vh"
        bgColor="black"
        borderRadius="10"
      >
        <Image
          src={IMAGE}
          objectFit="cover"
          width="150px"
          height="32px"
          borderRadius="10"
        />
      </Flex>
      <Flex
        dir="column"
        gap="25px"
        alignItems="center"
        alignContent="center"
        mt="25px"
        w="10vw"
        h="5vh"
        bgColor="black"
        borderRadius="10"
      >
        <MdHome size="20" color="white" />
        <Heading as="h3" size="md" color="white">
          <Link />
          Home
        </Heading>
      </Flex>
      <Flex
        dir="column"
        gap="25px"
        alignItems="center"
        alignContent="center"
        mt="25px"
        w="10vw"
        h="5vh"
        bgColor="black"
        borderRadius="10"
      >
        <FiSearch size="20" color="white" />
        <Heading as="h3" size="md" color="white">
          Search
        </Heading>
      </Flex>
      <Divider orientation="horizontal" mt="5" w="15vw" />
      {/* 2nd Section */}
      <Flex
        direction="column"
        gap="25px"
        alignContent="center"
        mt="5"
        bgColor="black"
        borderRadius="10"
        w="12vw"
        h="15vw"
        overflowY="auto"
      >
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Legal</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Legal</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Legal</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Legal</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Legal</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Legal</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Legal</Text>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" mt="5" w="15vw" />
      {/* 3rd Section */}
      <Flex
        dir="column"
        mt="5"
        bgColor="black"
        borderRadius="10"
        w="12vw"
        h="12vw"
        overflowY="auto"
      >
        <Grid templateColumns="1fr 1fr " gap="2px" textColor="white">
          <Flex>
            <Text>Legal</Text>
          </Flex>
          <Flex>
            <Text>Privacy </Text>
          </Flex>
          <Flex>
            <Text>Cookies</Text>
          </Flex>
          <Flex>
            <Text>Privacy Policy</Text>
          </Flex>
          <Flex>
            <Text>About Ads</Text>
          </Flex>
          <Flex>
            <Text>Accessibilities</Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
