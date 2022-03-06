import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import RouteWrapper from "./Routes";

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
