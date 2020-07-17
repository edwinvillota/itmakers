import { SET_IMPORT_CONTACTS } from '../types'

export const setImportContacts = (contacts) => {
  return {
    type: SET_IMPORT_CONTACTS,
    payload: contacts
  }
}