import { GridItem, Icon, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useColorModeValue } from "../components/ui/color-mode";
import useMediaQuery from "../hooks/useMediaQuery";

export interface ServiceType {
  icon: any;
  name: string;
  path: string;
  description: string;
}

const OperationBar = ({ icon, name, path, description }: ServiceType) => {
  const textColor = useColorModeValue("cyan.800", "gray.200");
  const bgColor = useColorModeValue("gray.200", "cyan.800");
  const textHover = useColorModeValue("gray.200", "cyan.800");
  const bgHover = useColorModeValue("cyan.800", "gray.200");
  const smallLaptop = useMediaQuery("(max-width:1024px)");
  const smallphone = useMediaQuery("(max-width:350px)");

  return (
    <GridItem
      color={textColor}
      bgColor={bgColor}
      _hover={{
        bgColor: bgHover,
        color: textHover,
        transition: "  ease-in-out  .35s",
      }}
      textAlign={"center"}
      padding={{ base: 2, md: 8 }}
      alignContent={"center"}
      borderRadius={"20px"}
      height={{ base: "150px", md: `${smallLaptop ? "180px" : "200px"}` }}
      width={{
        base: smallphone ? "260px" : "310px",
        md: `${smallLaptop ? "280px" : "320px"}`,
      }}
    >
      <Link to={path}>
        <Icon
          fontSize={{ base: "30px", md: `${smallLaptop ? "34px" : "40px"}` }}
        >
          {icon}
        </Icon>
        <Text
          fontSize={{ base: "12px", md: `${smallLaptop ? "15px" : "18px"}` }}
          fontWeight={"bold"}
          marginY={4}
        >
          {name}
        </Text>
        <Text fontSize={{ base: "9px", md: `12px` }}>{description}</Text>
      </Link>
    </GridItem>
  );
};

export default OperationBar;
