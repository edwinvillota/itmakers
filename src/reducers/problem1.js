import { SET_IMPORT_CONTACTS } from '../types'


const initialState = {
  importContacts: []
}

export default function problem1 ( state = initialState, action) {
  switch (action.type) {
    case SET_IMPORT_CONTACTS:
      return {
        ...state,
        importContacts: action.payload
      }
    default:
      return state
  }
}