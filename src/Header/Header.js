import React from "react";
import "./Header.css";
import {  GrDropbox } from 'react-icons/gr';

const Header = () => {
    const style = { color: "blue", fontSize:"1.5em" }
  return (
    <>
      <div className="bottomnav">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand">
            <GrDropbox style={style}/>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link">
                    Laptops
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    Desktop PC's
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    Networking Devices
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    Printers & Scanner
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    PC Parts
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    All Other Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    Repair
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
