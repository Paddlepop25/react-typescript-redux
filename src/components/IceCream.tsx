import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyIceCream from '../store/IceCream/IceCreamActions'
import { RootState } from '../store/rootReducer'
import ButtonStyle from '../styles/styledButtonTheme'
import { Box } from '../styles/styledTheme'
import Header from './Header'

const IceCream: React.FC = () => {
  const { numOfIceCreams } = useSelector((state: RootState) => state.iceCream)

  const dispatch = useDispatch()

  const buyOneIceCream = () => {
    dispatch(buyIceCream())
  }

  return (
    <>
      <Header />
      <Box>
        <h3>
          Ice-creams 🍨 -- {numOfIceCreams <= 0 ? 'ALL GONE' : numOfIceCreams}
        </h3>
        <button onClick={buyOneIceCream} disabled={numOfIceCreams <= 0}>
          Buy 1 icecream
        </button>
        &nbsp;
        <ButtonStyle
          onClick={buyOneIceCream}
          style={{ display: numOfIceCreams <= 0 ? 'none' : '' }}
          disabled={numOfIceCreams <= 0}
        >
          Buy 1 icecream
        </ButtonStyle>
      </Box>
    </>
  )
}

export default IceCream
