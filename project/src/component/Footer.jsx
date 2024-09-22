// UI
import festikaLogo from "../image/festika.svg";
import enamad from "../image/enamad.png";
import park from "../image/park.png";
import { Flex, Heading, Image, VStack, Link, Divider } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Divider marginTop="100px" marginBottom="20px" />

      <Flex
        as="footer"
        width="100vw"
        minH="300px"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        {/* LOGO */}
        <Flex
          flexGrow="2"
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

        {/* LINKS */}
        <VStack flexGrow="1">
          <Heading size="sm" color={theme.colors.primary} marginBottom="10px">
            لینک‌های بیشتر
          </Heading>
          <Link
            fontSize="sm"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            لینک اول
          </Link>
          <Link
            fontSize="sm"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            لینک دوم
          </Link>
          <Link
            fontSize="sm"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            لینک سوم
          </Link>
          <Link
            fontSize="sm"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            لینک چهارم
          </Link>
        </VStack>

        {/* CONTACT */}
        <VStack flexGrow="1">
          <Heading size="sm" color={theme.colors.primary} marginBottom="10px">
            راه‌های ارتباطی
          </Heading>
          <Link
            fontSize="sm"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            راه اول
          </Link>
          <Link
            fontSize="sm"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            راه دوم
          </Link>
          <Link
            fontSize="sm"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            راه سوم
          </Link>
          <Link
            fontSize="sm"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            راه چهارم
          </Link>
        </VStack>

        {/* CERTIFICATE */}
        <Flex
          gap="10px"
          alignItems="center"
          justifyContent="center"
          flexGrow="2"
        >
          <Image src={enamad} boxSize="100px" />
          <Image src={park} boxSize="100px" />
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
