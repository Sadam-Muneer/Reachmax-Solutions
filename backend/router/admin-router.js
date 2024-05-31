const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middlewares/admin-middleware");
const adminController = require("../controllers/admin-controller");

router.route("/contacts").get(adminMiddleware, adminController.getAllContacts);
router
  .route("/users/delete/:id")
  .delete(adminMiddleware, adminController.deleteUserById);
module.exports = router;
