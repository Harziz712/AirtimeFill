import { HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { BsArrowBarDown, BsArrowBarUp, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useColorModeValue } from "../../components/ui/color-mode";
import { LuArrowUpDown } from "react-icons/lu";
import useMediaQuery from "../../hooks/useMediaQuery";

const DisplayBox = () => {
  const bgColor = useColorModeValue("cyan.800", "cyan.800");
  const smallLaptop = useMediaQuery("(max-width:1024px)");

  var balance = 2000;

  return (
    <HStack>
      <SimpleGrid
        width={{ base: "290px", md: `${smallLaptop ? "350px" : "500px"}` }}
        height={"200px"}
        borderRadius={"20px"}
        bgColor={bgColor}
        textAlign={"center"}
        paddingTop={8}
        paddingX={4}
      >
        <VStack gap={7}>
          <Text
            fontSize={{ base: "20px", md: `${smallLaptop ? "20px" : "25px"}` }}
          >
            Wallet balance{" "}
          </Text>
          <Text
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            {" "}
            NGN {balance} <BsEye size={"20px"} />
          </Text>
          <HStack
            justifyContent={"center"}
            fontSize={{ base: "12px", md: `${smallLaptop ? "12px" : "15px"}` }}
          >
            <Link to="">
              <Text
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
              >
                <BsArrowBarDown size={"20px"} />
                Fund wallet
              </Text>
            </Link>
            <Link to="">
              <Text
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                borderXWidth={3}
                borderColor={"gray.100"}
                paddingX={3}
              >
                <BsArrowBarUp size={"20px"} /> Withdraw funds
              </Text>
            </Link>

            <Link to="">
              <Text
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
              >
                <LuArrowUpDown size={"20px"} /> Transfer funds
              </Text>
            </Link>
          </HStack>
        </VStack>
      </SimpleGrid>
    </HStack>
  );
};

export default DisplayBox;
