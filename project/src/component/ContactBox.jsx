// UI
import {
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  VStack,
  Text,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
import { useTheme } from "@chakra-ui/react";

const ContactBox = () => {
  const theme = useTheme();
  return (
    <Flex
      width="100vw"
      minH="700px"
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
    >
      {/* ADDRESS */}
      <Flex
        alignItems="center"
        justifyContent="center"
        height="100%"
        wrap="wrap"
        minW="50%"
      >
        <VStack width="500px">
          <Flex
            flexDir="column"
            justifyContent="start"
            alignItems="start"
            gap="10px"
            padding="30px"
          >
            <Heading as="h2" color={theme.colors.primary} fontSize={"xx-large"}>
              به سادگی با ما در ارتباط باشید.
            </Heading>
            <Text color="gray">راه‌های ارتباطی با ما زیاد و آسان است.</Text>
          </Flex>

          <Flex wrap="wrap" width="80%" height="400px" marginTop="100px">
            <Flex
              flexDir="column"
              justifyContent="start"
              alignItems="start"
              gap="10px"
              minW="50%"
            >
              <HiOutlineMail />
              <Heading as="h5" size="sm">
                ایمیل
              </Heading>
              <Text color={theme.colors.primary}>Festika@email.com</Text>
            </Flex>

            <Flex
              flexDir="column"
              justifyContent="start"
              alignItems="start"
              gap="10px"
              minW="50%"
            >
              <FiPhone />
              <Heading as="h5" size="sm">
                شماره تلفن
              </Heading>
              <Text color={theme.colors.primary} dir="ltr">
                +98 223344556677
              </Text>
            </Flex>

            <Flex
              flexDir="column"
              justifyContent="start"
              alignItems="start"
              gap="10px"
              minW="50%"
            >
              <GrLocation />
              <Heading as="h5" size="sm">
                آدرس
              </Heading>
              <Text color={theme.colors.primary}>پارک علم و فناوری گلستان</Text>
            </Flex>

            <Flex
              flexDir="column"
              justifyContent="start"
              alignItems="start"
              gap="10px"
              minW="50%"
            >
              <FiClock />
              <Heading as="h5" size="sm">
                ساعات کاری
              </Heading>
              <Text color={theme.colors.primary}>۲۴ ساعته</Text>
            </Flex>
          </Flex>
        </VStack>
      </Flex>

      {/* CONTACT */}
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100%"
        minW="50%"
      >
        <VStack
          width="500px"
          height="600px"
          borderRadius="15px"
          sx={{ "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          padding="8%"
          spacing="50px"
          border="1px"
          borderColor="white"
          marginRight="20px"
          marginLeft="20px"
        >
          <Heading as="h2" fontSize={"xx-large"}>از ما بپرسید.</Heading>
          <FormControl>
            <FormLabel htmlFor="text">نام و نام خانوادگی:</FormLabel>
            <Input
              focusBorderColor={theme.colors.primary}
              type="text"
              id="text"
              placeholder="نام خود را وارد کنید..."
              marginBottom="20px"
            />
            <FormLabel htmlFor="email">ایمیل:</FormLabel>
            <Input
              focusBorderColor={theme.colors.primary}
              type="email"
              id="email"
              placeholder="ایمیل خود را وارد کنید..."
              marginBottom="20px"
            />
            <FormLabel htmlFor="message">متن پیام:</FormLabel>
            <Textarea
              focusBorderColor={theme.colors.primary}
              id="message"
              placeholder="متن پیام خود را وارد کنید..."
              marginBottom="20px"
            />
            <Button
              justifySelf="center"
              marginTop="20px"
              width="100%"
              color={theme.colors.neutral}
              size="lg"
              variant="outline"
              backgroundColor={theme.colors.primary}
              borderColor={theme.colors.primary}
              _hover={{
                backgroundColor: `${theme.colors.secondary}`,
                borderColor: `${theme.colors.secondary}`,
                color: `${theme.colors.primary}`,
              }}
            >
              ارسال پیام
            </Button>
          </FormControl>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default ContactBox;
