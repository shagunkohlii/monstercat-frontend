import React, { useState } from "react";
import "./Navbar.css";
import Icons from "../Icons/Icons";

const Navbar = () => {
  const [isMenuVisible, setMenuvisible] = useState(false);

  const toggleMenu = () => {
    setMenuvisible(!isMenuVisible);
  };

  return (
    <>
      <div className="navbar">
        <img
          className="nav-hamburger"
          src="https://img.icons8.com/?size=100&id=59832&format=png&color=ffffff"
          onClick={toggleMenu}
          alt=""
        /> 
        <Icons />
      </div>

      {isMenuVisible && (
        <div className={`navbar-menu ${isMenuVisible ? "visible" : ""}`}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src="https://cdn.monstercat.com/monstercat-logo-white.svg"
              alt=""
              srcset=""
              className="logo"
            />
            <img
              alt="svgImg"
              style={{ width: "30px", height: "30px" }}
              src="https://img.icons8.com/?size=100&id=46&format=png&color=ffffff"
              onClick={toggleMenu}
            />
          </div>
          <div className="nav-links">
            <div className="nav-links-text">Music</div>
            <div className="nav-links-text">Artist</div>
            <div className="nav-links-text">About</div>
            <div className="nav-links-text">News</div>
            <div className="nav-links-text">Events</div>
            <div className="nav-links-text">Programming</div>
            <div className="nav-links-text">Gold</div>
            <div className="nav-links-text">Partners</div>
            <div className="nav-links-text">Press</div>
            <div className="nav-links-text">Player</div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <img
                className="nav-links-socials"
                src="https://img.icons8.com/?size=100&id=32292&format=png&color=ffffff"
                alt=""
              />
              <img
                className="nav-links-socials"
                src="https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff"
                alt=""
              />
              <img
                className="nav-links-socials"
                src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=ffffff"
                alt=""
              />
              <img
                className="nav-links-socials"
                src="https://img.icons8.com/?size=100&id=18104&format=png&color=ffffff"
                alt=""
              />
              <img
                className="nav-links-socials"
                src="https://img.icons8.com/?size=100&id=30888&format=png&color=ffffff"
                alt=""
              />
              <img
                className="nav-links-socials"
                src="https://img.icons8.com/?size=100&id=84521&format=png&color=ffffff"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
