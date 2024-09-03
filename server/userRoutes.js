const express = require('express');
const router = express.Router();

// Example route to get all users
router.get('/', (req, res) => {
  res.send('List of users');
});

// Example route to get a user by ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User details for user ID: ${userId}`);
});

// Example route to create a new user
router.post('/', (req, res) => {
  const newUser = req.body;
  res.send(`User created with data: ${JSON.stringify(newUser)}`);
});

// Example route to update a user
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  res.send(`User with ID ${userId} updated with data: ${JSON.stringify(updatedData)}`);
});

// Example route to delete a user
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID ${userId} deleted`);
});

module.exports = router;
