import { Divider, Image, Flex, Heading, Grid, Text } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import IMAGE from "../images/mainLOGO.png";
import { Link } from "react-router-dom";
import { LuLibrary } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      w="17vw"
      bgColor="#121212"
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
        // bgColor="black"
        borderRadius="10"
      >
        <Image src={IMAGE} objectFit="cover" width="150px" height="32px" />
      </Flex>
      <Flex
        dir="column"
        gap="25px"
        alignItems="center"
        alignContent="center"
        mt="25px"
        w="10vw"
        h="5vh"
        // bgColor="black"
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
        // bgColor="black"
        borderRadius="10"
      >
        <FiSearch size="20" color="white" />
        <Heading as="h3" size="md" color="white">
          Search
        </Heading>
      </Flex>
      <Divider orientation="horizontal" mt="5" w="17vw" />
      {/* 2nd Section */}
      <Flex
        direction="row"
        // bgColor="black"
        w="15vw"
        h="5vh"
        alignItems="center"
        gap="5"
        mt="10px"
        borderRadius="10"
      >
        <LuLibrary size="30" color="white" />
        <Heading as="h3" size="md" color="white">
          Your Library
        </Heading>
        <FaPlus size="26" color="white" />
      </Flex>
      <Flex
        direction="column"
        gap="25px"
        alignContent="center"
        // bgColor="black"
        borderRadius="10"
        w="15vw"
        h="30vh"
        mt="1"
        overflowY="auto"
      >
        <Flex
          direction="row"
          textColor="white"
          gap="5px"
          bgColor="red"
          w="10vw"
          h="8vh"
        >
          <Text>Song Name</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Song Name</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Song Name</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Song Name</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Song Name</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Song Name</Text>
        </Flex>
        <Flex direction="row" textColor="white" gap="5px">
          <Text>Song Name</Text>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" mt="5" w="17vw" />
      {/* 3rd Section */}
      <Flex
        direction="column"
        mt="5"
        // bgColor="black"
        borderRadius="10"
        w="15vw"
        h="12vw"
        gap="6"
      >
        <Flex direction="row" gap="6" textColor="white">
          <Text>Legal</Text>
          <Text>Privacy </Text>
          <Text>Cookies</Text>
        </Flex>
        <Flex direction="row" gap="6" textColor="white">
          <Text>About Ads</Text>
          <Text>Accessibilities</Text>
        </Flex>
        <Flex direction="row" gap="2" w="7vw" borderRadius="10" border="dashed" textColor="white">
          <MdLanguage size="25" />
          <Text size="xl">English</Text>
        </Flex>
        {/* </Grid> */}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
