import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";
import LoginForm from "./LoginForm";
import LoginSideImg from "../../assets/Loginside.png";

const LoginPage = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Stack
      minHeight={"100vh"}
      minWidth={"100vw"}
      bgColor={`${bgColor}`}
      alignItems={"right"}
      paddingLeft={{ base: 3, md: 10 }}
      paddingTop={5}
    >
      <Box marginBottom={30}>
        {" "}
        <Heading fontSize={"3xl"} color={"orange.500"}>
          HARZHUB
        </Heading>
      </Box>
      <Box
        display={{ base: "grid", md: "hidden" }}
        spaceX={{ base: 0, md: 40 }}
      >
        <Box>
          <Box>
            <Box paddingY={10} paddingRight={10} spaceY={3}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Login Account
              </Text>
              <Text>
                Type in your details below to log back in to your account
              </Text>
            </Box>
          </Box>
          <Box>
            <LoginForm />
          </Box>
        </Box>
        <Box zIndex={"1"} paddingX={10} width={"40%"}>
          <Image
            src={LoginSideImg}
            fit="cover"
            contrast="0.3"
            boxSize={"100%"}
            visibility={{ base: "hidden", md: "visible" }}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default LoginPage;
