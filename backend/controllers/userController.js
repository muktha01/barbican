import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/index.js";
import dotenv from "dotenv";

dotenv.config();

// Register
export const registerUser = async (req, res) => {
  try {
    const { username, mobile_number, password, role } = req.body;

    const existingUser = await User.findOne({ where: { mobile_number } });
    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      mobile_number,
      password: hashedPassword,
      role,
    });

    return res
      .status(201)
      .json({ message: "User registered successfully.", user });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { mobile_number, password } = req.body;

    const user = await User.findOne({ where: { mobile_number } });

    if (!user) return res.status(400).json({ message: "Invalid credentials." });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      token,
      user: {
        id: user.id,
        username: user.username,
        mobile_number: user.mobile_number,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all users (admin only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.status(200).json({ message: "Users retrieved successfully", users });
  } catch (err) {
    console.error("Get Users Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// const sendOTP = async (req, res) => {
//   const { phone } = req.body;
//   const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
//   const apiKey = '8c59fd6fbe0e9793ec2b27971221cace';

//   const url = `https://sms.renflair.com/V1.php?API=${apiKey}&PHONE=${phone}&OTP=${otp}`;

//   try {
//     const response = await axios.get(url);
//     console.log("📤 OTP Sent Response:", response.data);
//     return res.status(200).json({
//       message: 'OTP sent successfully',
//       otp,
//       gatewayResponse: response.data,
//     });
//   } catch (error) {
//     console.error('❌ Error sending OTP:', error.message);
//     return res.status(500).json({ message: 'Failed to send OTP' });
//   }
// };

// Simple in-memory store (not for production)
let otpStore = {};

// const sendOTP = async (req, res) => {
//   const { phone } = req.body;
//   const otp = Math.floor(100000 + Math.random() * 900000);

//   otpStore[phone] = otp; // store it for later verification

//   const apiKey = '8c59fd6fbe0e9793ec2b27971221cace';
//   const url = `https://sms.renflair.com/V1.php?API=${apiKey}&PHONE=${phone}&OTP=${otp}`;

//   try {
//     const response = await axios.get(url);
//     // console.log("📤 OTP Sent Response:", response.data);
//     return res.status(200).json({
//       message: 'OTP sent successfully',
//       otp, // Remove this in production!!
//       gatewayResponse: response.data,
//     });
//   } catch (error) {
//     console.error('❌ Error sending OTP:', error.message);
//     return res.status(500).json({ message: 'Failed to send OTP' });
//   }
// };

// const verifyOTP = async (req, res) => {
//   const { phone, otp } = req.body;

//   // Check if the OTP exists for the provided phone number
//   if (!otpStore[phone]) {
//     return res.status(400).json({ message: 'OTP not sent for this phone number' });
//   }

//   // Verify the OTP
//   if (otpStore[phone] === parseInt(otp)) {
//     // OTP is correct
//     delete otpStore[phone]; // OTP expires after verification
//     return res.status(200).json({ message: 'OTP verified successfully' });
//   } else {
//     // OTP is incorrect
//     return res.status(400).json({ message: 'Invalid OTP' });
//   }
// };
