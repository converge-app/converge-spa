import { IContact } from "../models/contact.model";
import { contactsConstants } from "../constants/contacts.constants";
import { ContactsService } from "../../services/contacts.service";

export class ContactActions {
  public static getContacts(userId: string) {
    const request = (value: string) => ({
      type: contactsConstants.GET_CONTACTS_REQUEST,
      userId: value
    });

    const success = (contacts: IContact[]) => ({
      type: contactsConstants.GET_CONTACTS_SUCCESS,
      contacts: contacts
    });
    const failure = (error: any) => ({
      type: contactsConstants.GET_CONTACTS_FAILURE,
      error
    });

    return async (dispatch: any) => {
      dispatch(request(userId));

      try {
        const contacts = await ContactsService.get(userId);
        dispatch(success(contacts));
      } catch (error) {
        dispatch(failure(error));
      }
    };
  }

  public static addContact(userId: string){

    const request = (value: string) => ({
      type: contactsConstants.ADD_CONTACTS_REQUEST,
      userId: value
    });

    const success = (contacts: IContact[]) => ({
      type: contactsConstants.ADD_CONTACTS_SUCCESS,
      contacts: contacts
    });
    const failure = (error: any) => ({
      type: contactsConstants.ADD_CONTACTS_FAILURE,
      error
    });

    return async (dispatch: any)=>{
      dispatch(request(userId));
      try{
        const contacts = await ContactsService.addContacts(userId);
        dispatch(success(contacts))
      }catch(error){
        dispatch(failure(error))
      }
    }
  }

  public static setCurrentContact(userId: string) {
    const request = (value: string) => ({
      type: contactsConstants.SET_CURRENT_CONTACT,
      userId: value
    });

    return async (dispatch: any) => {
      dispatch(request(userId));
    };
  }
}
