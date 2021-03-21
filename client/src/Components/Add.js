import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { postContacts, editContact } from "../JS/actions/contacs";
import { Link } from "react-router-dom";

const Add = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const userbyid = useSelector((state) => state.contactReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();

  useEffect(() => {
    edit ? setUser(userbyid) : setUser({ name: "", email: "", phone: "" });
  }, [edit, userbyid]);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleContact = () => {
    if (!edit) {
      dispatch(postContacts(user));
    }
    dispatch(editContact(userbyid._id, user));
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label> Name</label>
          <input
            placeholder="First Name"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </Form.Field>
        <Link to="/">
          <Button type="submit" onClick={handleContact}>
            {edit ? "save changes" : "Add"}
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Add;
