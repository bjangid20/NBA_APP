import * as actions from './actionTypes'

let initialState = {
  fromDate: "",
  toDate: ""
}

let lastId = 0

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FROM_DATE_ADDED:
      return {
        ...state,
        fromDate: action.payload.date
      }
    case actions.TO_DATE_ADDED:
      return {
        ...state,
        toDate: action.payload.date
      }
    case actions.FROM_DATE_REMOVED:
      return {
        ...state,
        fromDate: ""
      }
    case actions.TO_DATE_REMOVED:
      return {
        ...state,
        toDate: ""
      }
    default:
      return state
  }
}