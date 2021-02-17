import { BUY_ICECREAM, IceCreamAction } from './IceCreamTypes'

const buyIceCream = (numOfIceCreams: number = 1): IceCreamAction => ({
  type: BUY_ICECREAM,
  payload: numOfIceCreams,
})

export default buyIceCream
