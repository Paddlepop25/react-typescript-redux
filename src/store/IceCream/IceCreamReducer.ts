import { BUY_ICECREAM, IceCreamAction } from './IceCreamTypes'

interface IceCreamState {
  numOfIceCreams: number
}

const initialState = {
  numOfIceCreams: 8,
}

const iceCreamReducer = (
  state: IceCreamState = initialState,
  action: IceCreamAction
) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      }
    }
    default:
      return state
  }
}

export default iceCreamReducer
