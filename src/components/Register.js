// Register.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { username, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to send registration data to backend
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen pb-40">
      <div className="w-96 border border-gray-300 rounded-lg p-4 mb-4 shadow-lg font-[Poppins]">
        <h2 className="text-xl font-extrabold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block font-bold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
