import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import AuthRoute from "./Routes/AuthRoute";

import "./App.scss";

const App: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthRoute />
    </QueryClientProvider>
  );
};

export default App;
