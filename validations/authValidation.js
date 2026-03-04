const Joi = require("joi");

// Validation schema for register input
exports.registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Validation schema for login input
exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Validation schema for update profile input
exports.updateProfileSchema = Joi.object({
  bio: Joi.string().max(200).optional(),
  profilePicture: Joi.string().uri().optional(),
});
