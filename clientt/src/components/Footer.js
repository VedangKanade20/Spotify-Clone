import { Divider, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100vw"
      h="10vh"
      direction="row"
      py="1"
      bgColor="purple.300"
    >
      <Flex direction="column" alignContent="start" w="95vw">
        <Flex>
          <Text fontFamily="sans-serif" fontSize="xl">
            SignUp For Free
          </Text>
        </Flex>
        <Divider orientation="horizontal" color="black" w='51vw' />
        <Flex>
          <Text fontFamily="sans-serif" fontSize="xl">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card Needed.
          </Text>
        </Flex>
      </Flex>
      <Flex bgColor="pink" borderRadius="10" textAlign="center">
        <Text>SignUp For Free!!</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
