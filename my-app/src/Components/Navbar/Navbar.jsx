// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar-part">
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid" id="nav-color">
            <h1>
              <span className="red-head">Exer</span>
              <span className="white-head">Notion</span>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link" style={{ color: "white" }}>
                    Add Activity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/History"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    Activity History
                  </Link>
                </li>

                {/* <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link"
                  href="#"
                  style={{ color: "white" }}
                >
                  Sign up
                </Link>
              </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
