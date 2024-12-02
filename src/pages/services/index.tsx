import { Box, Flex, Text } from "@chakra-ui/react";
import ServiceGrid from "./serviceGrid";
import WalletOperation from "./walletOperation";
import { useColorModeValue } from "../../components/ui/color-mode";

const ServicesPage = () => {
  const textColor = useColorModeValue("cyan.800", "gray.200");

  return (
    <Box paddingY={{ base: 2, md: 8 }} paddingX={5}>
      <Box>
        <Flex color={textColor} fontWeight={"bold"}>
          <Text fontSize={{ base: "1xl", md: "2xl" }}>Services</Text>
        </Flex>
        <ServiceGrid />
      </Box>
      <Box>
        <WalletOperation />
      </Box>
    </Box>
  );
};

export default ServicesPage;
