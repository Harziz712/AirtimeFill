import { Provider } from "./components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeProvider } from "./components/ui/color-mode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./pages/routes";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8rLkFXqapHZurI0JIg9CP3gdde0kErgM",
  authDomain: "airtimeease.firebaseapp.com",
  projectId: "airtimeease",
  storageBucket: "airtimeease.firebasestorage.app",
  messagingSenderId: "51777833046",
  appId: "1:51777833046:web:8b7f2b9753b5585e5d53f7",
  measurementId: "G-H65KS4D3ET",
};

initializeApp(firebaseConfig);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <RouterProvider router={router} />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ColorModeProvider>
  </React.StrictMode>
);
