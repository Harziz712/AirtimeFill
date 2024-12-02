import { Box, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

export interface ServiceType2 {
  image: any;
  name: string;
  description: string;
}

function ServiceList({ image, name, description }: ServiceType2) {
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
      padding={{ base: 2, md: 2 }}
      alignContent={"center"}
      borderRadius={"20px"}
      height={{ base: "130px", md: `${smallLaptop ? "180px" : "180px"}` }}
      width={{ base: "250px", md: `${smallLaptop ? "310px" : "420px"}` }}
    >
      <Link to={""}>
        <HStack>
          <Box width={"200px"} paddingLeft={5}>
            <Text
              fontSize={{
                base: "10px",
                md: `${smallLaptop ? "12px" : "20px"}`,
              }}
              fontWeight={"bold"}
              marginY={4}
            >
              {name}
            </Text>
            <Text fontSize={{ base: "8px", md: `12px` }}>{description}</Text>
          </Box>
          <Box filter="grayscale(50%)">
            <Image
              src={image}
              h="240px"
              w="300px"
              fit="contain"
              boxSize={{ base: 28, md: 40 }}
            />
          </Box>
        </HStack>
      </Link>
    </GridItem>
  );
}

export default ServiceList;