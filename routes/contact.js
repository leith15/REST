// require express
const express = require("express");

// express router
const router = express.Router();

// require Contact model
const Contact = require("../models/Contact");

//require controllers
const controllers = require("../controllers/contact.controllers");

///////////////////// Routes

/**
 * @description : testing route
 * @path : http://localhost:7000/api/contacts/test
 * @method : GET
 * @data : no data
 * @access : public/private
 */
router.get("/test", (req, res) => {
  res.send("hello world");
});

/**
 * @description : add contact
 * @path : http://localhost:7000/api/contacts
 * @method : POST
 * @data : req.body
 * @access : public/private
 */

router.post("/", controllers.addContact);

/**
 * @description : Get all users
 * @path : http://localhost:7000/api/contacts
 * @method : GET
 * @data : no data
 * @access : public/private
 */

router.get("/", async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ response: result, message: "Contacts found" });
  } catch (error) {
    res.status(400).send({ message: "can not get contacts" });
  }
});

/**
 * @description : Get user by id
 * @path : http://localhost:7000/api/contacts/:id
 * @method : GET
 * @data : no data
 * @access : public/private
 */

router.get("/:id", controllers.getContactByID);

/**
 * @description : Delete a contact by id
 * @path : http://localhost:7000/api/contacts/:id
 * @method : DELETE
 * @data : no data
 * @access : public/private
 */

router.delete("/:id", controllers.deleteContact);

/**
 * @description : Update a contact by id
 * @path : http://localhost:7000/api/contacts/:id
 * @method : PUT
 * @data : no data
 * @access : public/private
 */

router.put("/:id", controllers.updateContact);

module.exports = router;
