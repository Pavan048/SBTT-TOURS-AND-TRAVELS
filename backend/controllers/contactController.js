const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// Create a new contact
const createContact = asyncHandler(async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json({ success: true, data: contact });
});

// Get all contacts
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ success: true, data: contacts });
});

// Get a single contact by ID
const getContactById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    return res.status(404).json({ success: false, message: 'Contact not found' });
  }
  res.status(200).json({ success: true, data: contact });
});

// Update a contact by ID
const updateContactById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
  if (!updatedContact) {
    return res.status(404).json({ success: false, message: 'Contact not found' });
  }
  res.status(200).json({ success: true, data: updatedContact });
});

// Delete a contact by ID
const deleteContactById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) {
    return res.status(404).json({ success: false, message: 'Contact not found' });
  }
  res.status(200).json({ success: true, message: 'Contact deleted successfully' });
});

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
};
