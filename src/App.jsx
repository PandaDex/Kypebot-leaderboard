import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leaderboard from "./routes/Leaderboard";
import P404 from "./routes/P404";
import Channels from "./routes/Channels";
import Admin from "./routes/Admin";
import Login from "./routes/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Channels />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/login" element={<Login />} />
          <Route exact path="/channels" element={<Channels />} />
          <Route exact path="/top" element={<Leaderboard />} />
          <Route exact path="/404" element={<P404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;