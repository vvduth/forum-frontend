import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <>
      <Header />
      <Homescreen />
    </>
  );
}

export default App;
