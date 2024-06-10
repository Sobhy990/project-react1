import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Singin from "./pages/Singnin";
import Singup from "./pages/Singup";
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/Javascript" element={<Javascript />} />
        <Route path="/singnin" element={<Singin />} />
        <Route path="/singnup" element={<Singup />} />
      </Routes>
    </div>
  );
};

export default App;
