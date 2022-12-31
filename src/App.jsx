import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Exchanges from "./Components/Exchanges";
import Coins from "./Components/Coins";
import Coin from "./Components/Coin";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </Router>
  );
};

export default App;
