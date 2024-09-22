// UI
import { Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import slider from "../image/poster/slider.svg";

const Slider = () => {
  const theme = useTheme();
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      padding="40px"
      textAlign="center"
    >
      <Heading as="h1" fontSize={["xx-large", "xxx-large"]}>
        فستیکا
      </Heading>
      <Text display="block" fontSize="medium" maxH="200px" padding="20px" minW="30%" overflow="scroll">
        هدف فستیکا ساخت بدون واسطه و راحت جشنواره‌های آنلاین است، با ثبت‌نام در
        این پلتفرم به راحتی ایونت‌های خود را مدیریت کنید و روزانه از هزاران
        جشنواره جدید باخبر شوید.
      </Text>
      <Button
        color={theme.colors.primary}
        variant="outline"
        backgroundColor={theme.colors.neutral}
        borderColor={theme.colors.primary}
        marginTop="10px"
        marginBottom="70px"
        _hover={{
          backgroundColor: `${theme.colors.primary}`,
          borderColor: `${theme.colors.neutral}`,
          color: `${theme.colors.neutral}`,
        }}
      >
        عضو خانواده بزرگ فستیکا شوید!
      </Button>
      <Image width="75%" src={slider} />
    </Flex>
  );
};

export default Slider;
