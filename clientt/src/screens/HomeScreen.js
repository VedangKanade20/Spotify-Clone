import {
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import IMAGE from "../images/mainLOGO.png";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const HomeScreen = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      direction="row"
      maxW="100vw"
      h="90vh"
      bgColor="#000000"
      gap="3"
      overflow="auto"
    >
      <Sidebar />

      <Flex
        direction="column"
        w="90%"
        h="90vh"
        bgColor="#121212"
        borderRadius="12px"
        mr="10px"
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
            <Flex w="fit-content" px="20px">
              <Text textColor="gray" as="h3" fontWeight="bold" fontSize="2xl">
                Spotify Playlist
              </Text>
            </Flex>
            <Flex w="fit-content" justifyContent="end" mr="15px">
              <Text textColor="gray" as="h3" fontWeight="bold" fontSize="md">
                Show All
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" w="100%" height="250px">
            <Grid
              justifyContent="center"
              templateColumns="repeat(5,1fr)"
              gap="16"
              mt="15px"
              ml="15px"
              px="10px"
              overflowY="scroll"
            >
              {[1, 1, 1, 1, 1].map(() => {
                return (
                  <GridItem w="175px" h="250px" bgColor="#171717">
                    <Flex
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      mt="10px"
                      textColor="white"
                    >
                      <Flex
                        w="145px"
                        h="145px"
                        bgColor="gray"
                        alignItems="center"
                        direction="column"
                      >
                        <Image src={IMAGE} w="50px" h="20px" />
                        <Flex
                          justifyContent="center"
                          direction="column"
                          alignItems="center"
                        ></Flex>
                      </Flex>
                      <Text>Today's Hits</Text>
                      <Text>By Yoooo</Text>
                    </Flex>
                  </GridItem>
                );
              })}
            </Grid>
          </Flex>
          {/* END OF GRID */}

          <Flex
            direction="row"
            justifyContent="space-between"
            px="20px"
            py="20px"
          >
            <Flex
              direction="row"
              gap="60px"
              textColor="white"
              textAlign="left"
              px="10px"
              py="10px"
            >
              <Flex direction="column" gap="10px">
                <Heading fontSize="lg">Company</Heading>
                <Text>About</Text>
                <Text>Jobs</Text>
                <Text>For the Record</Text>
              </Flex>
              <Flex direction="column" gap="10px">
                <Heading fontSize="lg"> Communities</Heading>
                <Text>For Artists</Text>
                <Text>Developers</Text>
                <Text>Advertising</Text>
                <Text>Investors</Text>
                <Text>Vendors</Text>
              </Flex>
              <Flex direction="column" gap="10px">
                <Heading fontSize="lg">Useful Links</Heading>
                <Text>Support</Text>
                <Text>Free Mobile App</Text>
              </Flex>
            </Flex>
            {/* Socials */}
            <Flex justifyContent="end" textColor="white" w="300px">
              <Flex
                direction="row"
                w="300px"
                h="100px"
                gap="12px"
                justifyContent="end"
              >
                <FaInstagram size="30px" />
                <RiTwitterXFill size="30px" />
                <FaFacebookF size="30px" />
              </Flex>
            </Flex>
          </Flex>
          <Divider orientation="horizontal" w="100%" />
          <Flex alignItems="center" justifyContent="space-between" w="95%">
            <p>© {currentYear} Spotify AB</p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
