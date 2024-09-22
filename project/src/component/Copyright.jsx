// UI
import { Flex, Text, Link, useTheme } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { LiaCopyrightSolid } from "react-icons/lia";

const Copyright = () => {
  const theme = useTheme();
  return (
    <Flex
      bg={theme.colors.primary}
      width="100vw"
      height="100px"
      justifyContent="space-around"
      alignItems="center"
      color="white"
    >
      <Flex gap="5px">
        <LiaCopyrightSolid />
        <Text overflow="scroll">تمامی حقوق برای فستیکا محفوظ است.</Text>
      </Flex>
      <Flex gap="15px">
        <Link href="https://www.instagram.com">
          <RiInstagramFill />
        </Link>
        <Link href="https://www.x.com">
          <FaTwitter />
        </Link>
        <Link href="https://www.facebook.com">
          <FaFacebook />
        </Link>
        <Link href="https://www.telegram.com">
          <FaTelegram />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Copyright;
