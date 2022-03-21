import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
      <section className="navbar-part">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h1>
                <span className="red-head">Exer</span>Notion
              </h1>
            </a>

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
                  <a className="nav-link" aria-current="page" href="#">
                    Add Your Activity
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="activity-history.html">
                    Activity History
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Subscribe</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

  );
};

export default Navbar;
