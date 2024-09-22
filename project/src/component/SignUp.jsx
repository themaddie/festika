// UI
import { Flex, Heading, Button } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const SignUp = () => {
  const theme = useTheme();
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      width="100w"
      minH="350px"
      gap="30px"
      sx={{
        background: "rgb(211,98,224)",
        background:
          "radial-gradient(circle, rgba(211,98,224,1) 0%, rgba(139,54,152,1) 100%)",
      }}
    >
      <Heading as="h2" color={theme.colors.neutral} fontSize={["large","xx-large"]} marginBottom="30px">
        به سادگی یک کلیک در هزاران جشنواره متنوع شرکت کنید!
      </Heading>
      <Button
        color={theme.colors.primary}
        size={["md", "lg"]}
        backgroundColor={theme.colors.neutral}
        _hover={{
          backgroundColor: `${theme.colors.primary}`,
          borderColor: `${theme.colors.neutral}`,
          color: `${theme.colors.neutral}`,
        }}
      >
        عضو خانواده بزرگ فستیکا شوید
      </Button>
    </Flex>
  );
};

export default SignUp;
