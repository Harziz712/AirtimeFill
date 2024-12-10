import { Outlet } from "react-router-dom";

import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "../pages/navbar";
import { useColorModeValue } from "../components/ui/color-mode";
import useMediaQuery from "../hooks/useMediaQuery";
import SideBar from "../pages/sidebar";

const Layout = () => {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const smallLaptop = useMediaQuery("(max-width:1024px)");
  return (
    <Grid>
      <NavBar />
      <Box id="main">
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
      </Box>
    </Grid>
  );
};

export default Layout;
