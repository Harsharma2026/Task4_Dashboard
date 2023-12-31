import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo.png";
// import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("Invalid password format");
      return;
    }

    // Check if the entered password is correct
    if (password === "SmartServTest@123") {
      // Redirect to the dashboard page
      navigate("/dashboard");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#222222]">
      <div className="bg-[#141414] p-8 rounded shadow-md w-[40%] h-[75%] text-white flex flex-col items-center">
        <img src={Logo} alt="Company Logo" className="mb-4" />

        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[60%] p-2 mb-6 border text-black border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[60%] p-2 mb-6 text-black border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-[60%] bg-[#71BE58] text-white p-2 rounded hover:bg-blue-600 mb-4"
        >
          Login
        </button>
        <div className="flex justify-between items-center w-[60%] mb-4">
          <a
            href="mailto:support@smartserv.io?subject=Password%20Reset"
            className="text-gray-400 hover:underline"
          >
            Forgot your Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
