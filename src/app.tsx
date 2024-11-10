import React from "react";

import { Routes } from "./routes";
import { GlobalContextProvider } from "./contexts/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalContextProvider>
        <Routes />
      </GlobalContextProvider>
    </>
  );
};

export default App;
