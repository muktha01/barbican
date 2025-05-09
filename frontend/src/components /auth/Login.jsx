import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({
    mobile_number: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  async function getUsers() {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        mobile_number: userData.mobile_number,
        password: userData.password,
      });

      // Handle successful login
      console.log('Login successful:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      alert('Login successful!');
      router("/purchase"); // Redirect to the purchase page after successful login
    } catch (error) {
      // Handle error during login
      alert('Login failed. Please check your credentials.');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    getUsers(); // Call the function to log in the user
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-y-6 bg-gray-100">
        <h2 className="text-xl font-bold text-center text-black mb-2">Login</h2>
        <form className="flex flex-col w-80 space-y-4" onSubmit={handleSubmit}>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
            </label>
            <input
                type="tel"
                name="mobile_number"
                value={userData.mobile_number}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                pattern="[0-9]{10}"
                maxLength="10"
                required
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
            </label>
            <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={userData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
            />
            </div>

            <button
            type="submit"
            className="w-32 bg-red-500 mx-auto text-white font-semibold py-2 rounded-md hover:bg-red-300"
            >
            Login
            </button>

            <p className="text-sm text-gray-700 mt-4 text-center">
            Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline"> <Link to={"/register"}> Register</Link></span>
            </p>
        </form>
    </div>
  );
};

export default Login;
