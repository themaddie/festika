// UI
import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const Manager = (props) => {
  const theme = useTheme();
  return (
    <Flex
      width={["50%","22%"]}
      height="200px"
      cursor="pointer"
      borderRadius="15px"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <Image
        objectFit="cover"
        minW="100px"
        maxW="100px"
        minH="100px"
        maxH="100px"
        borderRadius="15px"
        src={props.src}
      />
      <Heading size="sm" marginTop="15px">
        {props.heading}
      </Heading>
      <Text fontSize="xs" color={theme.colors.primary} marginTop="5px">
        {props.text}
      </Text>
    </Flex>
  );
};

export default Manager;
