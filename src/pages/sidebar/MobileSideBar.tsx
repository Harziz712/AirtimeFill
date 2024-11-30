import { Flex, Heading, Icon, VStack } from "@chakra-ui/react";
import { CgClose } from "react-icons/cg";
import SideBar from ".";
import { useState } from "react";
import { useColorModeValue } from "../../components/ui/color-mode";

const MobileSideBar = () => {
  const [close, setClose] = useState("visible");
  const bgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <VStack
      position={"absolute"}
      visibility={`${close}`}
      left={0}
      zIndex={20}
      top={0}
      right={0}
      bgColor={`${bgColor}`}
      width={"300px"}
    >
      <Flex gap={20} marginTop={5} alignItems={"center"}>
        <Heading fontSize={"2xl"} color={"orange.500"}>
          HARZHUB
        </Heading>
        <Icon
          fontSize="40px"
          alignItems={"center"}
          cursor={"pointer"}
          borderWidth={2}
          borderColor={"gray.300"}
          borderRadius={4}
          padding={2}
          onClick={() => {
            setClose("hidden");
          }}
        >
          <CgClose />
        </Icon>
      </Flex>
      <SideBar />
    </VStack>
  );
};

export default MobileSideBar;
