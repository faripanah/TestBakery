const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Register user - Rekisteröi käyttäjä
const registerUser = async (req, res) => {
  console.log('Request received:', req.body); // Pyyntö vastaanotettu
  try {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password - Salaa salasana
    const newUser = new User({ name, email, phone, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser }); // Käyttäjä rekisteröity onnistuneesti
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error }); // Virhe käyttäjän rekisteröinnissä
  }
};

// Get all users - Hae kaikki käyttäjät
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error }); // Virhe käyttäjien haussa
  }
};

module.exports = { registerUser, getUsers };
