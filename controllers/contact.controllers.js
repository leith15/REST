exports.addContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    if (!req.body.email) {
      res
        .status(400)
        .send({ response: response, message: "Email is required check again" });
    }
    const response = await newContact.save();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send("can not save it");
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ response: result, message: "Contacts found" });
  } catch (error) {
    res.status(400).send({ message: "can not get contacts" });
  }
};

exports.getContactByID = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ response: result, message: "Contacts found" });
  } catch (error) {
    res.status(400).send({ message: "There is no contacts with this id" });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    result.nModified ? res.send("updated") : res.send("user already updated");
  } catch (error) {
    res.status(400).send("No contact exist with that ID");
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.status(200).send({ message: "user deleted" })
      : res.send("there is no user with this id");
  } catch (error) {
    res.send("No contact exist with that ID");
  }
};
