import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import EverydayBanking from "./components/EverydayBanking";
import "./index.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/everyday-banking" element={<EverydayBanking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
