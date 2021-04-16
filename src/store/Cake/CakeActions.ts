import { BuyCakeAction, BUY_CAKE } from './CakeTypes'

const buyCake = (numOfCakes: number = 1): BuyCakeAction => {
  return {
    type: BUY_CAKE,
    payload: numOfCakes,
  }
}

export default buyCake
