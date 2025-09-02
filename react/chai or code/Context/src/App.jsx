import { useState } from "react";
import React from "react";

import "./App.css";
import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
    </UserContextProvider>
  );
}

export default App;
