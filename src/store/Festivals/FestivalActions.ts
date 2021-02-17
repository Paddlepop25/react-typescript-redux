import { InputFestivalAction, INPUT_FESTIVAL } from './FestivalTypes'

const inputFestival = (festival: string): InputFestivalAction => {
  return {
    type: INPUT_FESTIVAL,
    payload: festival,
  }
}

export default inputFestival
