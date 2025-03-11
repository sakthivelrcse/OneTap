import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/one.png"; // Import logo (Update path if needed)

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Handle Home Click - Logout User if Authenticated
  const handleHomeClick = (event) => {
    if (isAuthenticated) {
      const confirmLeave = window.confirm(
        "You are currently logged in. Clicking Home will log you out. Do you want to continue?"
      );
      if (confirmLeave) {
        localStorage.removeItem("isAuthenticated"); // Logout user
        navigate("/"); // Redirect to Home page
      } else {
        event.preventDefault(); // Prevent navigation if canceled
      }
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove login status
    navigate("/"); // Redirect to Home page
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={handleHomeClick}>
          <img src={logo} alt="OneTap Logo" className="navbar-logo" />
          <h1 className="navbar-title">OneTap</h1>
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link" onClick={handleHomeClick}>
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="navbar-link">Dashboard</Link>
              <button onClick={handleLogout} className="navbar-button">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="navbar-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
