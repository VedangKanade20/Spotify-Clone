import { Divider, Image, Flex, Heading } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import IMAGE from "../images/mainLOGO.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      w="15vw"
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
    </Flex>
  );
};

export default Sidebar;
