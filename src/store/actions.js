import * as actions from './actionTypes';

export const fromDateAdded = date => ({
  type: actions.FROM_DATE_ADDED,
  payload: {
    date
  }
})

export const fromDateRemoved = date => ({
  type: actions.FROM_DATE_REMOVED,
  payload: {
    date
  }
})

export const toDateAdded = date => ({
  type: actions.TO_DATE_ADDED,
  payload: {
    date
  }
})

export const toDateRemoved = date => ({
  type: actions.TO_DATE_REMOVED,
  payload: {
    date
  }
})




// function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1"
//     }
//   }
// }