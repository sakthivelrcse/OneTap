import { Link } from "react-router-dom";
import "./Home.css";  // Importing the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Your Digital Hub</h1>
      <p className="home-desc">
      Effortlessly manage and access all your favorite platforms in one place. Stay organized and in control with ease!
      </p>
      <Link to="/dashboard" className="home-button">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
