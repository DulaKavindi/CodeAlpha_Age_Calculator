import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Calculator from "./pages/calculator";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/StartPage" element={<StartPage />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}
