const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} = require('../controllers/contactController');

// Create a new contact
router.post('/', createContact);

// Get all contacts
router.get('/', getAllContacts);

// Get a single contact by ID
router.get('/:id', getContactById);

// Update a contact by ID
router.put('/:id', updateContactById);

// Delete a contact by ID
router.delete('/:id', deleteContactById);

module.exports = router;
