import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaBars, FaBell } from "react-icons/fa";
import { useState } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";
import ColorModeSwitch from "../../shared/ColorModeSwitch";
import ProfileMenu from "./ProfileMenu";
import { useColorModeValue } from "../../components/ui/color-mode";
import MobileSideBar from "../sidebar/MobileSideBar";

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1000px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const bgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <Box
      position={"fixed"}
      width={"100vw"}
      padding={6}
      paddingRight={{ base: 5, md: 20 }}
      bgColor={`${bgColor}`}
      justifyContent={"space-between"}
      display={"flex"}
      alignItems={"center"}
      zIndex={99}
    >
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        color={"orange.500"}
        marginLeft={{
          base: "0",
          md: "100px",
        }}
      >
        HARZHUB
      </Heading>

      <Flex gap={5} alignItems={"center"}>
        {isAboveMediumScreens ? (
          <>
            {" "}
            <ColorModeSwitch />
            <Icon
              fontSize="40px"
              alignItems={"center"}
              cursor={"pointer"}
              borderWidth={2}
              borderColor={"gray.300"}
              borderRadius={4}
              padding={2}
            >
              <FaBell />
            </Icon>
            <ProfileMenu />
          </>
        ) : (
          <Flex gap={6}>
            <Icon
              fontSize="40px"
              alignItems={"center"}
              cursor={"pointer"}
              borderWidth={2}
              borderRadius={4}
              padding={2}
              borderColor={"gray.300"}
            >
              <FaBell />
            </Icon>
            <Icon
              fontSize="40px"
              alignItems={"center"}
              cursor={"pointer"}
              borderWidth={2}
              borderColor={"gray.300"}
              borderRadius={4}
              padding={2}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <FaBars />
            </Icon>
          </Flex>
        )}
      </Flex>
      {!isAboveMediumScreens && isMenuToggled && <MobileSideBar />}
    </Box>
  );
};

export default NavBar;
