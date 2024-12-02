import {
  PopoverRoot,
  PopoverTrigger,
  Flex,
  Icon,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  Group,
  Button,
  Text,
  PopoverCloseTrigger,
} from "@chakra-ui/react";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useColorModeValue } from "../components/ui/color-mode";

const LogOutText = () => {
  const bgColor = useColorModeValue("orange.500", "cyan.800");
  const textColor = useColorModeValue("cyan.800", "gray.200");

  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Flex
          gap={5}
          alignItems={"center"}
          cursor={"pointer"}
          color={textColor}
        >
          <Icon size={{ base: "lg", md: "2xl" }}>
            <ArrowLeftStartOnRectangleIcon />
          </Icon>
          <Text fontSize={{ base: "15px", md: "20px" }}> LogOut</Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent
        color={textColor}
        fontWeight={"bold"}
        position={"absolute"}
        top={50}
        left={{ base: 0, md: 300 }}
        zIndex={40}
      >
        <PopoverHeader>LOG OUT</PopoverHeader>
        <PopoverArrow />
        <PopoverBody>Are you sure you want to log out?</PopoverBody>
        <PopoverFooter>
          <Group>
            <Link to="/login">
              <Button size="sm" color={textColor} bgColor={bgColor}>
                Log me out
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm" color={textColor} bgColor={bgColor}>
                Take me back
              </Button>
            </Link>
          </Group>
        </PopoverFooter>
        <PopoverCloseTrigger />
      </PopoverContent>
    </PopoverRoot>
  );
};

export default LogOutText;
