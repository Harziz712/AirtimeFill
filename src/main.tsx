import { Provider } from "./components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeProvider } from "./components/ui/color-mode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./pages/routes";

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
