import { AuthContextProvider } from "context/Auth/store";
import { ThemeProvider } from "context/SwitchTheam";
import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import RenderRoute from "routes/_RenderRoute";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <ThemeProvider initialTheme={"light"}>
          <AuthContextProvider>
            <RenderRoute />
          </AuthContextProvider>
        </ThemeProvider>
      </Suspense>
    </HashRouter>
  );
}

export default App;
