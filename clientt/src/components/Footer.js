import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" direction="row" justifyContent="center" py="5">
      <Flex direction="column" alignContent="flex-start">
        <Flex>
          <Text>Hello</Text>
        </Flex>
        <Flex>
          <Text>Hello</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
