const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Login de usuario
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }
    res.status(200).json({ message: 'Usuario autenticado exitosamente', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al autenticar usuario', error });
  }
};

module.exports = { loginUser };