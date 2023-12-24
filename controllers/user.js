const User = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  return res.json(await User.find({}));
};

const handleGetUserById = async (req, res) => {
  return res.json(await User.findById(req.params.id));
};

const handleCreateUser = async (req, res) => {
  if (
    !req.body ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.jobTitle ||
    !req.body.gender
  ) {
    return res.status(400).json({
      message: "please provide all the data keys",
    });
  }

  const result = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    email: req.body.email,
    jobTitle: req.body.jobTitle,
  });

  res.status(200).json({
    message: "new user created",
    userDetails: result,
  });
};

const handleDeleteUserById = async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  return res.json({
    message: "success",
    details: result,
  });
};
const handleUpdateUserById = async (req, res) => {
  const result = await User.findByIdAndUpdate(req.params.id, req.body);
  return res.json({
    message: "success",
    details: result,
  });
};

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
