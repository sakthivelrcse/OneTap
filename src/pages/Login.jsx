import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "sakthivel@gmail.com" && password === "sakthivel") {
      localStorage.setItem("isAuthenticated", "true"); // Store login status
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid Credentials! Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to OTT Account</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
