import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ userData }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/main">
            MyAnimeList
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/main"
                >
                  My Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/main/profile"
                >
                  My Profile
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {userData
                ? "Hello, " + capitalizeFirstLetter(userData.data.first_name)
                : ""}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
