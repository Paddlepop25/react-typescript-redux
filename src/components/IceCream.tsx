import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyIceCream from '../store/IceCream/IceCreamActions'
import { RootState } from '../store/rootReducer'
import Header from './Header'

const IceCream = () => {
  const { numOfIceCreams } = useSelector((state: RootState) => state.iceCream)

  const dispatch = useDispatch()

  const buyOneIceCream = () => {
    dispatch(buyIceCream())
  }

  return (
    <>
      <Header />
      <h3>
        Ice-creams 🍨 -- {numOfIceCreams <= 0 ? 'ALL GONE' : numOfIceCreams}
      </h3>
      <button onClick={buyOneIceCream} disabled={numOfIceCreams <= 0}>
        Buy 1 icecream
      </button>
    </>
  )
}

export default IceCream
