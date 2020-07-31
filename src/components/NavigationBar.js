import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo2 from "./Images/logo2.png";



 const NavigationBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light"  style={{ backgroundColor: "#FF4500", fontweight: "bold" }}>
    <a className="navbar-brand" href="/" style={{ padding: "0 5% 0" }}>
    <img src={logo2} alt="logo" height="60px" width="100px" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{ float: "right" }}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="nav navbar-nav ml-auto" style={{ fontSize: "20px" }}>
        <li className="nav-item active">
          <a className="nav-link" href="/"  style={{color: "#fff" }}>
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about">
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="contact">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="shop">
            Shop
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="portfolio">
            portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="blog">
            blog
          </a>
        </li>
      </ul>
    </div>
  </nav>





  
);
export default NavigationBar;