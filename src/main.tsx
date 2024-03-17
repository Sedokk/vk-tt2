import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@vkontakte/vkui/dist/vkui.css";
import "./index.css";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider appearance="light">
        <AdaptivityProvider>
          <AppRoot>
            <App />
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
