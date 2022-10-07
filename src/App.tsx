// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
function App() {
  return (
    <div className="App max-w-[1400px] ml-auto mr-auto">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/detail" element={<Detail />} /> */}
          <Route path="/:id/:title" element={<Detail />} />
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
