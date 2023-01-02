import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Exchanges from "./Components/Exchanges";
import Coins from "./Components/Coins";
import Coin from "./Components/CoinDetail";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

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
      <Footer />
    </Router>
  );
};

export default App;
