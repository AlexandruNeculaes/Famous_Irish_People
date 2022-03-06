import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PersonInfo from "./components/PersonInfo";
import About from "./components/About";

function RouteWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<PersonInfo />} />
    </Routes>
  );
}
export default RouteWrapper;
