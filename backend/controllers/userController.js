const User = require('../models/userModel');
const db = require('../config/db');
const bcrypt = require('bcryptjs'); 
const axios = require('axios');


const fetchAllUsers = (req, res) => {
  const query = 'SELECT * FROM users';  

  // Execute the query
  db.query(query, (err, results) => {
    if (err) {
      // Log error if query fails
      console.error('❌ Error fetching users:', err);
      return res.status(500).json({ message: 'Error fetching users' });
    }

    // If no users are found
    if (results.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    // Send the results back in the response
    console.log('Fetched users:', results);
    return res.json(results);
  });
};


const loginUser = (req, res) => {
  const { mobile_number, password } = req.body;
  console.log(req.body, "Received data");

  // Query to fetch the user by mobile_number
  const query = 'SELECT * FROM users WHERE mobile_number = ?';
  db.query(query, [mobile_number], (err, results) => {
    if (err) {
      console.error('❌ Error during login:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // Check if no user is found with the provided mobile_number
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid mobile number or password' });
    }

    const user = results[0];  // Get the first user from results

    // Compare the provided password with the stored hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('❌ Error during password comparison:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid mobile number or password' });
      }

      // Success - password matches
      return res.status(200).json({
        message: 'Login successful',
        user: user  // You can omit sensitive details like password if needed
      });
    });
  });
};



const registerUser = (req, res) => {
  const { name, mobile_number, password } = req.body;
  
  console.log(req.body, "Received registration details");

  // Check if the mobile number already exists in the database
  const checkQuery = 'SELECT * FROM users WHERE mobile_number = ?';
  db.query(checkQuery, [mobile_number], (err, results) => {
    if (err) {
      console.error('❌ Error checking mobile number:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      // Mobile number already exists
      return res.status(400).json({ message: 'Mobile number is already registered' });
    }

    // Hash the password before storing it
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('❌ Error hashing password:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      // Insert the new user into the database
      const insertQuery = 'INSERT INTO users (name, mobile_number, password) VALUES (?, ?, ?)';
      db.query(insertQuery, [name, mobile_number, hashedPassword], (err, results) => {
        if (err) {
          console.error('❌ Error inserting user:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }

        // Respond with success
        return res.status(201).json({
          message: 'User registered successfully',
          user: { id: results.insertId, name, mobile_number }
        });
      });
    });
  });
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


module.exports = { fetchAllUsers , loginUser, registerUser, sendOTP, verifyOTP};
