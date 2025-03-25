import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [visitorCount, setVisitorCount] = useState(0);

  // 模擬訪客計數器（每次重新整理 +1）
  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("visitorCount") || "0");
    const newCount = currentCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem("visitorCount", newCount);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="title">網路攻防實習</span>
        <nav className="nav-links">
          <Link to="/" className="link">About</Link>
          <Link to="/chat" className="link">Chat</Link>
        </nav>
      </div>

      <div className="navbar-right">
        <span className="visitor">參觀人數 {visitorCount}</span>
        <a href="#" className="btn">Login</a>
        <a href="#" className="btn">Sign Up</a>
      </div>
    </header>
  );
}
