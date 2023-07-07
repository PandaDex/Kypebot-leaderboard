import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leaderboard from "./Leaderboard";
import P404 from "./P404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Leaderboard />} />
          <Route exact path="/404" element={<P404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;