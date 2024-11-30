import { Outlet } from "react-router-dom";

import { Box, Grid } from "@chakra-ui/react";
import NavBar from "../pages/navbar";

const Layout = () => {
  return (
    <Grid>
      <NavBar />
      <Box id="main">
        <Outlet />
      </Box>
    </Grid>
  );
};

export default Layout;
