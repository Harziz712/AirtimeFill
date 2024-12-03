import { Box, Heading, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";

const LoginPage = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box
      position={"absolute"}
      visibility={`${close}`}
      left={0}
      zIndex={20}
      top={0}
      right={0}
      bgColor={`${bgColor}`}
      width={"100vw"}
      alignItems={"right"}
      height={"100vh"}
      paddingLeft={3}
      paddingTop={5}
    >
      <Heading fontSize={"3xl"} color={"orange.500"}>
        HARZHUB
      </Heading>

      <Box paddingY={10} paddingRight={10} spaceY={3}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Login Account
        </Text>
        <Text>Type in your details below to log back in to your account</Text>
      </Box>
    </Box>
  );
};

export default LoginPage;
