import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../layout/ErrorPage";
import Dashboard from "./Dashboard";
import ServicesPage from "./services";
import TransactionPage from "./transaction";
import EpinPage from "./e-pin";
import ReferralPage from "./referrals";
import Settings from "./settings";
import GetHelpPage from "./help";
import LoginPage from "./Auth/LoginPage";
import SignUpPage from "./Auth/SignupPage";
import AuthRoute from "./Auth/AuthRoute";
import ForgotPassword from "./Auth/ForgotPassword";
// import HomePage from "../layout/HomePage";

const router = createBrowserRouter([
  // Redirect root (`/`) to the login page
  { path: "/", element: <Navigate to="/login" replace /> },
  // Public Routes
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/forgot-password", element: <ForgotPassword /> },

  // Authenticated Routes
  {
    element: <AuthRoute redirectPath="/login" />, // Ensure this checks for auth before allowing access
    children: [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "services", element: <ServicesPage /> },
          { path: "transaction-history", element: <TransactionPage /> },
          { path: "e-pin", element: <EpinPage /> },
          { path: "referrals", element: <ReferralPage /> },
          { path: "settings", element: <Settings /> },
          { path: "gethelp", element: <GetHelpPage /> },
        ],
      },
    ],
  },
  // Catch-all for unmatched routes
  { path: "*", element: <Navigate to="/login" replace /> },
]);

export default router;
