const db = require('../config/db');

const getAllUsers = (callback) => {
  const query = 'SELECT * FROM users';
  db.query(query, callback);
};

module.exports = { getAllUsers };
