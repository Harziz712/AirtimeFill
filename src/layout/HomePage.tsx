import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideBar from "../pages/sidebar";
import { useColorModeValue } from "../components/ui/color-mode";
import useMediaQuery from "../hooks/useMediaQuery";

function HomePage() {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const smallLaptop = useMediaQuery("(max-width:1024px)");

  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `${smallLaptop ? "310px" : "400px"} 1fr`,
      }}
      paddingTop={20}
      height={"100vh"}
      position={"relative"}
    >
      <Stack hideBelow="lg" bgColor={`${bgColor}`}>
        <GridItem area="aside" paddingLeft={`${smallLaptop ? 10 : 32}`}>
          <SideBar />
        </GridItem>
      </Stack>
      <GridItem area="main" bgColor={`${bgColor}`}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
