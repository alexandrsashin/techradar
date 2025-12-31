import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RadarPage } from "./pages/RadarPage";
import { TechDetail } from "./components/TechDetail";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RadarPage />} />
        <Route path="/tech/:id" element={<TechDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
