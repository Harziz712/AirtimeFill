import { Box, SimpleGrid } from "@chakra-ui/react";
import DisplayBox from "./DisplayBox";
import MessageBar from "./MessageBar";
import ServicesPage from "../services";

const Dashboard = () => {
  return (
    <SimpleGrid>
      <Box
        paddingTop={10}
        gap={5}
        paddingX={2}
        alignContent={"center"}
        justifyContent={"center"}
        display={{ base: "grid", md: "flex" }}
        color={"gray.100"}
      >
        <DisplayBox />
        <MessageBar />
      </Box>

      <ServicesPage />
    </SimpleGrid>
  );
};

export default Dashboard;
