import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_BYID,
} from "../constants/contacts";
import axios from "axios";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get("/api/contacts");
    dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error });
    console.log(error);
  }
};

export const deleteContact = (id) => (dispatch) => {
  axios
    .delete(`/api/contacts/${id}`)
    .then((response) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const getContactByID = (id) => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get(`/api/contacts/${id}`);
    dispatch({ type: GET_CONTACTS_BYID, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error });
    console.log(error);
  }
};

export const postContacts = (user) => async (dispatch) => {
  try {
    const result = await axios.post("/api/contacts", user);
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error });
  }
};

export const editContact = (id, user) => (dispatch) => {
  axios
    .put(`/api/contacts/${id}`, user)
    .then((response) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
