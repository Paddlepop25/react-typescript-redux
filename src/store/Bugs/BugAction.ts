import {
  AddBugAction,
  ResolveBugAction,
  DeleteBugAction,
  ADD_BUG,
  UPDATE_BUG,
  DELETE_BUG,
} from './BugTypes'

// can return object like this and the one below?
export const addBug = (description: string): AddBugAction => ({
  type: ADD_BUG,
  payload: {
    description,
  },
})

// diff way of returning
export const updateBug = (id: number): ResolveBugAction => {
  return {
    type: UPDATE_BUG,
    payload: {
      id,
    },
  }
}

export const deleteBug = (id: number): DeleteBugAction => ({
  type: DELETE_BUG,
  payload: {
    id,
  },
})
