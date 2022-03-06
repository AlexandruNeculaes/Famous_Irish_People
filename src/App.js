import React from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import Home from "./components/Home";
import RouteWrapper from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <main>
        <RouteWrapper />
      </main>
    </BrowserRouter>
  );
}

export default App;
