import { combineReducers } from "redux";
import { contactReducer } from "./contact";
import { editReducer } from "./edit";

export const rootReducer = combineReducers({ contactReducer, editReducer });
