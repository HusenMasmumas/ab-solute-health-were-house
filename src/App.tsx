import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "context/Auth/store";
import { ThemeProvider } from "context/SwitchTheam";
import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import RenderRoute from "routes/_RenderRoute";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={client}>
      <HashRouter>
        <Suspense fallback={loading}>
          <ThemeProvider initialTheme={"light"}>
            <AuthContextProvider>
              <RenderRoute />
            </AuthContextProvider>
          </ThemeProvider>
        </Suspense>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
