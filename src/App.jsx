// App.jsx

import React from "react";
import Header from "./Header";
import { DataProvider } from "./ContextData";
import Navbar from "./Navbar";
import Section from "./Section";

function App() {
  //  Calling Created Components in //
  return (
    <DataProvider>
      <Navbar />
      <Header />
      <Section />
    </DataProvider>
  );
}

export default App;
