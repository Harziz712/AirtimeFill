import { GridItem, Icon, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

type Props = {
  icon: any;
  name: string;
  description: string;
};

function ServiceBar({ icon, name, description }: Props) {
  const textColor = useColorModeValue("cyan.800", "gray.200");
  const bgColor = useColorModeValue("gray.200", "cyan.800");
  const textHover = useColorModeValue("gray.200", "cyan.800");
  const bgHover = useColorModeValue("cyan.800", "gray.200");
  const smallLaptop = useMediaQuery("(max-width:1024px)");

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
      height={{ base: "150px", md: `${smallLaptop ? "200px" : "220px"}` }}
      width={{ base: "130px", md: `${smallLaptop ? "200px" : "220px"}` }}
    >
      <Link to={""}>
        <Icon
          fontSize={{ base: "25px", md: `${smallLaptop ? "30px" : "40px"}` }}
        >
          {icon}
        </Icon>
        <Text
          fontSize={{ base: "10px", md: `${smallLaptop ? "12px" : "15px"}` }}
          fontWeight={"bold"}
          marginY={4}
        >
          {name}
        </Text>
        <Text fontSize={{ base: "8px", md: `10px` }}>{description}</Text>
      </Link>
    </GridItem>
  );
}

export default ServiceBar;
