import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Kanbas" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
