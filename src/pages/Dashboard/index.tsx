import { Box, SimpleGrid } from "@chakra-ui/react";
import DisplayBox from "./DisplayBox";
import MessageBar from "./MessageBar";
import HomeServicePage from "./HomeServicePage";

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
      <Box paddingBottom={5}>
        <HomeServicePage />
      </Box>
    </SimpleGrid>
  );
};

export default Dashboard;
