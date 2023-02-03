import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePlayersPage from "./pages/CreatePlayersPage";
import GetPlayersPage from "./pages/GetPlayersPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePlayersPage />} />
        <Route path="/get" element={<GetPlayersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
