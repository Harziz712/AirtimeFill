import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Spinner, Center } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

interface AuthRouteProps {
  redirectPath: string; // Path to redirect if not authenticated
}

const AuthRoute: React.FC<AuthRouteProps> = ({ redirectPath = "/login" }) => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth); // Firebase hook for auth state

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    ); // Show a loading spinner while checking auth state
  }

  if (error) {
    console.error("Error fetching auth state:", error);
    return <Navigate to={redirectPath} replace />;
  }

  // If no user is authenticated, redirect to the login page
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  // Render the protected route
  return <Outlet />;
};

export default AuthRoute;
