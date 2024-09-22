// UI
import poster1 from "../image/poster/process_outline_II_black.svg";
import poster2 from "../image/poster/teaching_outline_I_black.svg";
import poster3 from "../image/poster/under_construction_outline_III_black.svg";
import poster4 from "../image/poster/search_outline_I_black.svg";
import poster5 from "../image/poster/teaching_outline_II_black.svg";
import poster6 from "../image/poster/team_outline_I_black.svg";
import { Flex, Heading} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

// COMPONENTS
import Festival from "./asset/Festival";

const Festivals = () => {
  const theme = useTheme();
  return (
    <Flex
      flexDir="column"
      width="100%"
      minH="600px"
      textAlign="center"
      padding="8%"
      gap="20px"
      alignItems="center"
      justifyContent="center"
    >
      {/* HEADING */}
      <Flex width="80%" justifyContent="space-between" alignItems="center">
        <Heading as="h3" color={theme.colors.primary} fontSize={["large","xx-large"]}>
          جشنواره‌های در حال برگزاری
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
        height="500px"
        marginTop="30px"
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="15px"
        overflow="scroll"
      >
        <Festival
          src={poster1}
          heading="جشنواره اول"
          text="این جشنواره با این توضیحات در حال انجام است."
        />
        <Festival
          src={poster2}
          heading="جشنواره دوم"
          text="این جشنواره با این توضیحات در حال انجام است."
        />
        <Festival
          src={poster3}
          heading="جشنواره سوم"
          text="این جشنواره با این توضیحات در حال انجام است."
        />
        <Festival
          src={poster4}
          heading="جشنواره چهارم"
          text="این جشنواره با این توضیحات در حال انجام است."
        />
        <Festival
          src={poster5}
          heading="جشنواره پنجم"
          text="این جشنواره با این توضیحات در حال انجام است."
        />
        <Festival
          src={poster6}
          heading="جشنواره ششم"
          text="این جشنواره با این توضیحات در حال انجام است."
        />
      </Flex>
    </Flex>
  );
};

export default Festivals;
