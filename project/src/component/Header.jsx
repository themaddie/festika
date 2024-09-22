// UI
import festikaLogo from "../image/festika.svg";
import {
  Box,
  Flex,
  Button,
  HStack,
  Image,
  Divider,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const theme = useTheme();
  return (
    <>
      <Flex
        as="header"
        justifyContent="space-around"
        alignItems="center"
        wrap="wrap"
      >
        {/* LOGO */}
        <Box>
          <Image src={festikaLogo} alt="Logo" boxSize="90px" />
        </Box>

        {/* NAVBAR */}
        <Flex as="nav" textAlign="center" wrap="wrap" justifyContent="center">
          <Menu>
            <MenuButton
              cursor="pointer"
              dir="ltr"
              fontWeight="normal"
              variant="none"
              as={Button}
              leftIcon={<MdKeyboardArrowDown />}
              _hover={{
                color: `${theme.colors.primary}`,
                textDecoration: "none",
              }}
            >
              جشنواره‌ها
            </MenuButton>
            <MenuList>
              <MenuItem
                _hover={{
                  backgroundColor: `${theme.colors.secondary}`,
                }}
              >
                علمی
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: `${theme.colors.secondary}`,
                }}
              >
                سیاسی
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: `${theme.colors.secondary}`,
                }}
              >
                فرهنگی
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: `${theme.colors.secondary}`,
                }}
              >
                آموزشی
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            cursor="pointer"
            fontWeight="normal"
            variant="none"
            href="#"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            درباره ما
          </Button>
          <Button
            cursor="pointer"
            fontWeight="normal"
            variant="none"
            href="#"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            ارتباط با ما
          </Button>
          <Button
            cursor="pointer"
            fontWeight="normal"
            variant="none"
            href="#"
            _hover={{
              color: `${theme.colors.primary}`,
              textDecoration: "none",
            }}
          >
            قوانین و مقررات
          </Button>
        </Flex>

        {/* BUTTONS */}
        <HStack>
          <Button
            color={theme.colors.neutral}
            size="md"
            variant="outline"
            backgroundColor={theme.colors.primary}
            borderColor={theme.colors.primary}
            _hover={{
              backgroundColor: `${theme.colors.secondary}`,
              borderColor: `${theme.colors.secondary}`,
              color: `${theme.colors.primary}`,
            }}
          >
            ثبت‌نام
          </Button>
          <Button
            color={theme.colors.primary}
            size="md"
            variant="outline"
            borderColor={theme.colors.primary}
            _hover={{
              backgroundColor: `${theme.colors.secondary}`,
              borderColor: `${theme.colors.secondary}`,
            }}
          >
            ورود
          </Button>
        </HStack>
      </Flex>

      <Divider marginTop="20px" />
    </>
  );
};

export default Header;
