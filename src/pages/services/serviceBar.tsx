import { Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";
import useMediaQuery from "../../hooks/useMediaQuery";

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
      padding={10}
      borderRadius={"20px"}
      height={"300px"}
      width={{ base: "200px", md: `${smallLaptop ? "200px" : "280px"}` }}
    >
      <Icon fontSize={{ base: "60px", md: `${smallLaptop ? "70px" : "80px"}` }}>
        {icon}
      </Icon>
      <Text
        fontSize={{ base: "15px", md: `${smallLaptop ? "16px" : "22px"}` }}
        fontWeight={"bold"}
        marginY={4}
      >
        {name}
      </Text>
      <Text fontSize={"12px"}>{description}</Text>
    </GridItem>
  );
}

export default ServiceBar;
