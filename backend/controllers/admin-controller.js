const Contact = require("../models/contact_model");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ mesaage: "NO Contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next();
  }
};
// delete user
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await user.deleteOne({ _id: id });
    return res.status(200).json({ mesaage: "User deleted successful" });
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllContacts, deleteUserById };
