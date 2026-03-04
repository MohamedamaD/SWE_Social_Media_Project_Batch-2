const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registerSchema,
  loginSchema,
  updateProfileSchema,
} = require("../validations/authValidation");

// Generate JWT token helper
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register
exports.register = async (req, res) => {
  try {
    // Validate request body
    const { error } = registerSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const messages = error.details.map((d) => d.message);
      return res.status(400).json({ messages });
    }

    // Check if email or username already taken
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    if (existingUser) {
      const field =
        existingUser.email === req.body.email ? "Email" : "Username";
      return res.status(409).json({ message: `${field} is already taken` });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    // Create new user
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Return user data and token excluding password
    const { password, ...userWithoutPassword } = user.toObject();
    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user._id),
      user: userWithoutPassword,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    // Validate request body
    const { error } = loginSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const messages = error.details.map((d) => d.message);
      return res.status(400).json({ messages });
    }

    // Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Check if password is correct
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Return token
    res.status(200).json({
      message: "Login successful",
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Profile
exports.getProfile = async (req, res) => {
  try {
    // req.user is set by the protect middleware
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update Profile
exports.updateProfile = async (req, res) => {
  try {
    // Validate request body
    const { error } = updateProfileSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const messages = error.details.map((d) => d.message);
      return res.status(400).json({ messages });
    }

    // Update only bio and profilePicture
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { bio: req.body.bio, profilePicture: req.body.profilePicture },
      { new: true },
    ).select("-password");

    res.status(200).json({
      message: "Profile updated successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
