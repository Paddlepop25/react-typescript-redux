import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyCake from '../store/Cake/CakeActions'
import { RootState } from '../store/rootReducer'

const Cake: React.FC = () => {
  const { numOfCakes } = useSelector((state: RootState) => state.cake)

  const dispatch = useDispatch()

  const buyOneCake = () => {
    dispatch(buyCake())
  }
  return (
    <>
      <h3>Cakes 🍰 -- {numOfCakes <= 0 ? 'SOLD OUT' : numOfCakes}</h3>
      <button onClick={buyOneCake} disabled={numOfCakes <= 0}>
        Buy 1 cake
      </button>
    </>
  )
}

export default Cake
