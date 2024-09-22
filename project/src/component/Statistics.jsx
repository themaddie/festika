// UI
import { Flex, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
// COMPS
import Statistic from "./asset/Statistic";

const Statistics = () => {
  const theme = useTheme();
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      minH="400px"
      gap="70px"
      padding="50px"
    >
      <Heading as="h2" color={theme.colors.primary}>
        چه کسانی به ما اعتماد کردند؟
      </Heading>

      <Flex width="100%" justifyContent="center" gap={["100px", "200px"]} wrap="wrap">
        <Statistic num="450" title="شرکت" />
        <Statistic num="4050" title="جشنواره" />
        <Statistic num="250" title="همکار" />
        <Statistic num="100" title="کاربر" />
      </Flex>
    </Flex>
  );
};

export default Statistics;
