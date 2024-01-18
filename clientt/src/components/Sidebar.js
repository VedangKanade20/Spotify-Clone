import { Divider, Flex, Heading } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      w="25vw"
      bgColor="gray.600"
      borderRadius="15"
    >
      <Flex
        dir="column"
        gap="50px"
        alignItems="center"
        alignContent="center"
        mt="25px"
        w="20vw"
        h="10vh"
        bgColor="black"
        borderRadius="10"
      >
        <MdHome size="40" color="white" />
        <Heading as="h3" size="xl" color="white">
          Home
        </Heading>
      </Flex>
      <Flex
        dir="column"
        gap="50px"
        alignItems="center"
        alignContent="center"
        mt="25px"
        w="20vw"
        h="10vh"
        bgColor="black"
        borderRadius="10"
      >
        <FiSearch size="40" color="white" />
        <Heading as="h3" size="xl" color="white">
          Search
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
