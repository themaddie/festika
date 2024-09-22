// UI
import festikaLogo from "../image/festika.svg";
import {
  Flex,
  Image,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const Intro = () => {
  const theme = useTheme();
  return (
    <VStack width="100%" height="400px" textAlign="center">
      <Flex
        marginTop="80px"
        alignItems="center"
        gap="10px"
        justifyContent="center"
      >
        <Image src={festikaLogo} boxSize="100px" />
        <Heading
          as="h2"
          marginTop="20px"
          size="lg"
          color={theme.colors.tertiary}
        >
          فستیکا
        </Heading>
      </Flex>
      <Text width="70%" maxH="150px" padding="20px" overflow="scroll">
        «فستیکا» از کلمه فستیوال گرفته شده و تنها پلتفرم حرفه‌ای و تخصصی برای
        ساخت جشنواره در زمینه‌های مختلف است. در فستیکا همه آنچه برای ساخت و
        طراحی یک جشنواره اعم از تخصیص صفحه جداگانه برای هر جشنواره، نمایش پوستر
        جشنواره، تعیین رشته‌های جشنواره، تعیین زمان شروع و پایان‌ جشنواره، داوری
        آنلاین آثار دریافت شده در یک پنل کاملا حرفه‌ای، گالری عکس جشنواره،
        مدیریت کاربران، گزارش نموداری و آماری از وضعیت جشنواره و در نهایت اعلام
        نتیجه جشنواره نیاز دارید، در دسترس شما قرار می دهد.
      </Text>
    </VStack>
  );
};

export default Intro;
