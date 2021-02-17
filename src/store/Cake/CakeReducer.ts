import { BuyCakeAction, BUY_CAKE } from './CakeTypes'

interface CakeState {
  numOfCakes: number
}

const initialState = {
  numOfCakes: 10,
}

const cakeReducer = (
  state: CakeState = initialState,
  action: BuyCakeAction
) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      }
    }
    default:
      return state
  }
}

export default cakeReducer
