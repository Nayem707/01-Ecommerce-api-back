const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/User_Controller');

router.post('/', registerUser);

module.exports = router;
