const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.registerUser);
router.get('/users', userController.getUsers);

module.exports = router;
