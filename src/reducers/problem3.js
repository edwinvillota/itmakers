import { SET_USER } from '../types'

const initialState = {
  user: 'Jhon Doe'
}

export default function problem3 (state = initialState, action) {
  switch (action.type) {
    case SET_USER: 
      return {
        ...state,
        user: action.payload
      }
    default: 
      return state
  }
}