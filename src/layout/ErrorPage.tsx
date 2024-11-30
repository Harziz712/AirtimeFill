import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  // to dynaiclly show the kind of error while routing
  return (
    <>
      <Box padding={5}>
        {" "}
        <Heading fontSize={"30px"} fontWeight={"Bold"}>
          {" "}
          Oops...
        </Heading>
        <Text fontSize={"15px"}>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "Sorry, an unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
