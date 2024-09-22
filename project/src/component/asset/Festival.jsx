// UI
import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const Festival = (props) => {
  const theme = useTheme();
  return (
    <Flex
      width={["50%","30%"]}
      height="200px"
      cursor="pointer"
      borderRadius="15px"
      flexDir="column"
      justifyContent="center"
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <Image
        objectFit="contain"
        minW="100%"
        maxW="100%"
        minH="50%"
        maxH="50%"
        src={props.src}
      />
      <Heading size="sm" marginTop="15px">
        {props.heading}
      </Heading>
      <Text fontSize="xs" color={theme.colors.primary} marginTop="10px" overflow="scroll">
        {props.text}
      </Text>
    </Flex>
  );
};

export default Festival;
