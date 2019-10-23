import { contactsConstants } from "../constants/contacts.constants";
import { combineReducers } from "redux";

const getContacts = (state: any = {}, action: any) => {
  switch (action.type) {
    case contactsConstants.GET_CONTACTS_REQUEST:
      return {
        gettingContacts: true,
        userId: action.userId
      };

    case contactsConstants.GET_CONTACTS_SUCCESS:
      return {
        gotContacts: true,
        contacts: action.contacts
      };

    case contactsConstants.GET_CONTACTS_FAILURE:
      return {};
    default:
      return state;
  }
};

const addContact = (state: any = {}, action: any) => {
  switch (action.type) {
    case contactsConstants.ADD_CONTACTS_REQUEST:
      return {
        gettingContacts: true,
        userId: action.userId
      };

    case contactsConstants.ADD_CONTACTS_SUCCESS:
      return {
        gotContacts: true,
        contacts: action.contacts
      };

    case contactsConstants.ADD_CONTACTS_FAILURE:
      return {};
    default:
      return state;
  }
};

const setCurrentContact = (state: any = {}, action: any) => {
  switch (action.type) {
    case contactsConstants.SET_CURRENT_CONTACT:
      return {
        contactId: action.userId
      };
    default:
      return state;
  }
};

export const contacts = combineReducers({
  getContacts,
  setCurrentContact,
  addContact
});
