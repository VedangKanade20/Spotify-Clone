import { Divider, Flex, Heading } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import { image } from "../images/mainLOGO.png";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      w="20vw"
      bgColor="gray.600"
      borderRadius="15"
    >
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
    </Flex>
  );
};

export default Sidebar;
