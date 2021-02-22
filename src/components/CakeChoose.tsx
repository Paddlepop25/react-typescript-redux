import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyCake from '../store/Cake/CakeActions'
import { RootState } from '../store/rootReducer'

const CakeChoose: React.FC = () => {
  const { numOfCakes } = useSelector((state: RootState) => state.cake)

  const [inputCakes, setInputCakes] = React.useState(2)

  const howManyCakes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCakes(Number(event.target.value))
  }

  const dispatch = useDispatch()

  const buyXCakes = () => {
    dispatch(buyCake(inputCakes))
  }
  return (
    <>
      <h3>Cakes 🥮 -- {numOfCakes <= 0 ? 'FINISHED' : numOfCakes}</h3>
      <input
        type='number'
        value={inputCakes}
        onChange={howManyCakes}
        min='2'
        max={numOfCakes}
        placeholder='2'
      />
      &nbsp;
      <button onClick={buyXCakes} disabled={numOfCakes <= 0}>
        Buy {inputCakes} cakes
      </button>
    </>
  )
}

export default CakeChoose
