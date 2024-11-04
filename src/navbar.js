import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import topbanner from "./Assets/topBanner.png";
import Homepage from "./homepage";
import Services from "./Services";
import ParentContact from "./contactParent";

const ChatWithJasonBot = () => <div>Chat with JasonBot Page</div>;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bodyStyle = {
    padding: "none",
    margin: "none",
    width: "100%",
  };

  const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ED5107",
    padding: "1% 0",
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 1001,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px",
  };

  const logoStyle = {
    width: "20%",
  };

  const menuStyle = {
    display: isMenuOpen ? "block" : "none",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#ED5107",
    textAlign: "center",
  };

  const hamburgerStyle = {
    display: isMobileView ? "block" : "none",
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const navLinksContainerStyle = {
    display: isMobileView ? "none" : "flex",
    justifyContent: "space-around",
    width: "100%",
  };

  const navLinksMobileStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Router>
      <div style={bodyStyle}>
        <div
          className="topbannerContainer"
          style={{
            backgroundColor: "#fff",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          <img
            src={topbanner}
            alt="Logo"
            style={logoStyle}
            className="topbanner"
          />
        </div>
        <div style={navBarStyle}>
          <div style={hamburgerStyle} onClick={toggleMenu}>
            &#9776;
          </div>
          <div style={navLinksContainerStyle}>
            <Link to="/" style={linkStyle} className="navlinks">
              Home
            </Link>
            <a
              href="https://chatgpt.com/g/g-h6SP5MWR4-lucky-bot"
              style={linkStyle}
              className="navlinks"
            >
              Chat with our AI bot
            </a>
            <Link to="/Services" style={linkStyle} className="navlinks">
              Services
            </Link>
            <Link to="/contact" style={linkStyle} className="navlinks">
              Contact
            </Link>
          </div>
          {isMenuOpen && (
            <div style={{ ...menuStyle, ...navLinksMobileStyle }}>
              <Link to="/" style={linkStyle} className="navlinks" onClick={toggleMenu}>
                Home
              </Link>
              <a
                href="https://chatgpt.com/g/g-h6SP5MWR4-lucky-bot"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Chat with our AI bot
              </a>
              <Link to="/Services" style={linkStyle} className="navlinks" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/contact" style={linkStyle} className="navlinks" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<ParentContact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;