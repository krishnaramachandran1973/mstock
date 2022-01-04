import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ isLoggedIn, dispatch }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(isLoggedIn);
  });

  return (
    <nav
      className="navbar navbar-expand-sm bg-dark justify-content-center"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container m-3 p-3 border rounded">
        <a className="navbar-brand" href="#">
          mStock App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          {isLoggedIn ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/companies"
                >
                  Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/companies"
                >
                  Watch List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/companies"
                >
                  Compare Performance
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => dispatch({ type: "LOGOUT" })}
                >
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/companies"
                >
                  Companies
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};
export default connect(mapStateToProps)(NavBar);
