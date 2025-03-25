import React from "react";
import "./App.css"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* 導覽列在最上方 */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
