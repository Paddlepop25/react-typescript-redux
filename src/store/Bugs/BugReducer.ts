import { ADD_BUG, DELETE_BUG, UPDATE_BUG } from './BugTypes'

let id = 0

interface BugState {
  id: number
  description: string
  resolved: boolean
}

const initialState = [
  {
    id,
    description: '',
    resolved: false,
  },
]

const bugReducer = (state: BugState[] = initialState, action: any) => {
  switch (action.type) {
    case ADD_BUG: {
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: false,
        },
      ]
    }
    case UPDATE_BUG: {
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      )
    }
    case DELETE_BUG: {
      return state.filter((bug) => bug.id !== action.payload.id)
    }
    default:
      return state
  }
}

export default bugReducer
