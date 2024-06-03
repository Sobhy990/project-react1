import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";

const App = () => {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welecome to React !</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/Javascript" element={<Javascript />} />
      </Routes>
    </div>
  );
};

export default App;
