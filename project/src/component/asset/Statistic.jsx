// UI
import { Heading, VStack, Text } from "@chakra-ui/react";

const Statidtic = (props) => {
  return (
    <VStack >
      <Heading>{props.num}+</Heading>
      <Text>{props.title}</Text>
    </VStack>
  );
};

export default Statidtic;
