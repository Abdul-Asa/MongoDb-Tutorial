const express = require('express');
const router = express.Router();
const User = require('../models/Users');

//Get all users
router.get('/', async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//Get a specific user
router.get('/:userID', async (req, res) => {
  try {
    const getSingleUser = await User.findOne({ userId: req.params.userID });
    res.json(getSingleUser);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//Create a user
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    const createUser = await user.save();
    res.json(createUser);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//Delete a user
router.delete('/:userID', async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ userId: req.params.userID });
    res.json(deleteUser);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//Update a user
router.patch('/:userID', async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { userId: req.params.userID },
      { $set: { userName: req.body.userName } }
    );
    res.json(updateUser);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
