import { GridItem, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import {
  LuArrowRight,
  LuCheckCircle,
  LuClock,
  LuXCircle,
} from "react-icons/lu";
import useMediaQuery from "../../hooks/useMediaQuery";

const MessageBar = () => {
  const wideLaptop = useMediaQuery("(min-width:1040px)");

  const messages = [
    {
      icon: <LuClock />,
      title: "All transactions",
      bgColor: "orange.500",
      backHover: "orange.300",
    },

    {
      icon: <LuClock />,
      title: "Pending transactions",
      bgColor: "teal.600",
      backHover: "teal.300",
    },
    {
      icon: <LuCheckCircle />,
      title: "Completed transactions",
      bgColor: "green.500",
      backHover: "green.300",
    },
    {
      icon: <LuXCircle />,
      title: "Failed transactions",
      bgColor: "red.500",
      backHover: "red.300",
    },
  ];
  return (
    <SimpleGrid gap={2}>
      {messages.map((message) => (
        <GridItem
          key={message.title}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={{ base: "300px", md: `${wideLaptop ? "400px" : "300px"}` }}
          bgColor={message.bgColor}
          height={"40px"}
          borderRadius={10}
          paddingX={5}
          cursor={"pointer"}
          _hover={{ bgColor: message.backHover }}
        >
          <Flex alignItems={"center"} gap={2}>
            {message.icon}
            <Text>{message.title}</Text>
          </Flex>
          <LuArrowRight />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default MessageBar;
