// import constants
import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_BYID,
} from "../constants/contacts";

// initial state
const initialState = {
  contacts: [],
  loadContacts: false,
  errors: null,

  user: {},
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, loadContacts: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, loadContacts: false, contacts: payload };
    case GET_CONTACTS_FAIL:
      return { ...state, loadContacts: false, errors: payload };
    case GET_CONTACTS_BYID:
      return { ...state, loadContacts: false, user: payload };
    default:
      return state;
  }
};
