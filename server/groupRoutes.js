const express = require('express');
const router = express.Router();

// Example route to get all groups
router.get('/', (req, res) => {
  res.send('List of groups');
});

// Example route to get a group by ID
router.get('/:id', (req, res) => {
  const groupId = req.params.id;
  res.send(`Group details for group ID: ${groupId}`);
});

// Example route to create a new group
router.post('/', (req, res) => {
  const newGroup = req.body;
  res.send(`Group created with data: ${JSON.stringify(newGroup)}`);
});

// Example route to update a group
router.put('/:id', (req, res) => {
  const groupId = req.params.id;
  const updatedData = req.body;
  res.send(`Group with ID ${groupId} updated with data: ${JSON.stringify(updatedData)}`);
});

// Example route to delete a group
router.delete('/:id', (req, res) => {
  const groupId = req.params.id;
  res.send(`Group with ID ${groupId} deleted`);
});

module.exports = router;
