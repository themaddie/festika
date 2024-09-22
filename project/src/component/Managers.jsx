// UI
import user1 from "../image/user/user1.jpg";
import user2 from "../image/user/user2.jpg";
import user3 from "../image/user/user3.jpg";
import user4 from "../image/user/user4.avif";
import user5 from "../image/user/user5.webp";
import user6 from "../image/user/user6.avif";
import { Flex, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

// COMPONENTS
import Manager from "./asset/Manager";

const Managers = () => {
  const theme = useTheme();
  return (
    <Flex
      flexDir="column"
      width="100%"
      height="700px"
      textAlign="center"
      padding="8%"
      gap="20px"
      alignItems="center"
      justifyContent="center"
    >
      {/* HEADING */}
      <Flex width="80%" justifyContent="space-between" alignItems="center">
        <Heading as="h3" color={theme.colors.primary} fontSize={["large","xx-large"]}>
          برگزارکنندگان جشنواره
        </Heading>
        <MdKeyboardDoubleArrowLeft
          size={50}
          cursor="pointer"
          _hover={{ color: `${theme.colors.primary}` }}
        />
      </Flex>

      {/* COMPS */}
      <Flex
        width="80%"
        minH="450px"
        marginTop="30px"
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="15px"
        overflow="scroll"
      >
        <Manager
          src={user1}
          heading="برگزارکننده اول"
          text="برگزارکننده با توضیحات"
        />
        <Manager
          src={user2}
          heading="برگزارکننده دوم"
          text="برگزارکننده با توضیحات"
        />
        <Manager
          src={user3}
          heading="برگزارکننده سوم"
          text="برگزارکننده با توضیحات"
        />
        <Manager
          src={user4}
          heading="برگزارکننده چهارم"
          text="برگزارکننده با توضیحات"
        />
        <Manager
          src={user5}
          heading="برگزارکننده پنجم"
          text="برگزارکننده با توضیحات"
        />
        <Manager
          src={user6}
          heading="برگزارکننده ششم"
          text="برگزارکننده با توضیحات"
        />
        <Manager
          src={user6}
          heading="برگزارکننده هفتم"
          text="برگزارکننده با توضیحات"
        />
        <Manager
          src={user6}
          heading="برگزارکننده هشتم"
          text="برگزارکننده با توضیحات"
        />
      </Flex>
    </Flex>
  );
};

export default Managers;
