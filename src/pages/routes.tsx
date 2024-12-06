import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../layout/ErrorPage";
import HomePage from "../layout/HomePage";
import Dashboard from "./Dashboard";
import ServicesPage from "./services";
import TransactionPage from "./transaction";
import EpinPage from "./e-pin";
import ReferralPage from "./referrals";
import Settings from "./settings";
import GetHelpPage from "./help";
import LoginPage from "./Auth/LoginPage";
import SignUpPage from "./Auth/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
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
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignUpPage /> },
]);

export default router;
