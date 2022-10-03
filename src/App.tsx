import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Homescreen from "./screens/Homescreen";

import { Routes, Route, Link } from "react-router-dom";
import PostDetails from "./components/PostDetails";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Homescreen />} />
        <Route path="/post/:id" element={<PostDetails /> }  />
        <Route path="/login" element={<LoginScreen /> }  />
      </Routes>
      
    </>
  );
}

export default App;
