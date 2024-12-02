import { Box, Text } from "@chakra-ui/react";
import ServiceGrid from "./serviceGrid";

const ServicesPage = () => {
  return (
    <Box paddingY={10} paddingX={5}>
      <Text fontSize={{ base: "20px", md: "2xl" }}>Services</Text>
      <ServiceGrid />
    </Box>
  );
};

export default ServicesPage;
