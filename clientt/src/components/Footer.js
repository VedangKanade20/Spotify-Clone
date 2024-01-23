import { Divider, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" direction="row" py="1">
      <Flex direction="column" alignContent="start">
        <Flex>
          <Text>SignUp For Free</Text>
        </Flex>
        <Divider orientation="horizontal" color="red" w="70" />
        <Flex>
          <Text>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card Needed.
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="end" bgColor="gray">
        <Text>Hello</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
