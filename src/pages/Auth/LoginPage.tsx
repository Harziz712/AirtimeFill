import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";
import LoginForm from "./LoginForm";
import LoginSideImg from "../../assets/Loginside.png";
import useMediaQuery from "../../hooks/useMediaQuery";

const LoginPage = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const smallLaptop = useMediaQuery("(max-width:1024px)");
  const tablet = useMediaQuery("(min-width:768px)");

  return (
    <Stack
      minHeight={"100vh"}
      bgColor={`${bgColor}`}
      alignItems={"right"}
      paddingX={{ base: 3, md: smallLaptop ? 5 : 10 }}
      paddingTop={5}
    >
      <Box
        marginBottom={{ base: 0, md: smallLaptop || tablet ? 30 : 0 }}
        paddingLeft={{ base: 0, md: 10 }}
      >
        {" "}
        <Heading fontSize={"3xl"} color={"orange.500"}>
          HARZHUB
        </Heading>
      </Box>
      <Box
        display={{ base: "grid", md: smallLaptop ? "grid" : "hidden" }}
        spaceX={{ base: 0, md: smallLaptop ? 10 : 5 }}
        paddingX={{ base: 0, md: smallLaptop ? 40 : 10 }}
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
        <Box
          zIndex={"1"}
          paddingY={{ md: 10 }}
          paddingX={10}
          contrast="0.1"
          width={{ md: smallLaptop || tablet ? "70%" : "20%" }}
        >
          <Image
            src={LoginSideImg}
            fit="cover"
            boxSize={"70%"}
            visibility={{ base: "hidden", md: "visible" }}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default LoginPage;
