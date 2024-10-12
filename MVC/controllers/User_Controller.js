const User = require('../models/User_Model');

// Define the registerUser function
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please required fields' });
    }

    const userRole = role || 'user';

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
      role: userRole,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Respond with success
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export the registerUser function
module.exports = {
  registerUser,
};
