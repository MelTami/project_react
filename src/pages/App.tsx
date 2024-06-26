import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default App;
