import { InputFestivalAction, INPUT_FESTIVAL } from './FestivalTypes'

export interface FestivalState {
  festivals: string[]
}

const initialState = {
  festivals: [],
}

const festivalReducer = (
  state: FestivalState = initialState,
  action: InputFestivalAction
) => {
  switch (action.type) {
    case INPUT_FESTIVAL: {
      return {
        ...state,
        festivals: [...state.festivals, action.payload],
      }
    }
    default:
      return state
  }
}

export default festivalReducer
