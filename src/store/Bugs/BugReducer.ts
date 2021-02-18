import { ADD_BUG } from './BugTypes'

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
    default:
      return state
  }
}

export default bugReducer
