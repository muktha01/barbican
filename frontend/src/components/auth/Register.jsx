import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const router = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile_number: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/register", formData);
      
      // Handle successful registration
      console.log("Registration successful:", response.data);
      alert('Registration successful! Please login.');
      
      // Redirect to login page after successful registration
      router("/");
    } catch (error) {
      // Handle registration error
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }

    // Clear form data after submission
    setFormData({ name: "", mobile_number: "", password: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <form className="flex flex-col w-80 space-y-4 p-6 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-center text-black mb-2">Register</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-32 bg-red-500 mx-auto text-white font-semibold py-2 rounded-md hover:bg-teal-800"
        >
          Register
        </button>

        <p className="text-sm text-gray-700 mt-4 text-center">
          Already have an account? <span className="text-blue-600 cursor-pointer hover:underline"><Link to={"/"}>Login</Link></span>
        </p>
      </form>
    </div>
  );
};

export default Register;
