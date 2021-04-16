export const ADD_BUG = 'ADD_BUG'
export const UPDATE_BUG = 'UPDATE_BUG'
export const DELETE_BUG = 'DELETE_BUG'

export interface AddBugAction {
  type: string
  payload: {
    description: string
  }
}

export interface ResolveBugAction {
  type: string
  payload: {
    id: number
  }
}

export interface DeleteBugAction {
  type: string
  payload: {
    id: number
  }
}
