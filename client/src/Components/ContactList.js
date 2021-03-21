import { getContacts } from "../JS/actions/contacs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import { Card } from "semantic-ui-react";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const loading = useSelector((state) => state.contactReducer.loadContacts);
  console.log(contacts, loading);
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {loading ? (
        <h2>Loading</h2>
      ) : (
        contacts.map((el) => <Contact key={el._id} contact={el} />)
      )}
    </div>
  );
};

export default ContactList;
