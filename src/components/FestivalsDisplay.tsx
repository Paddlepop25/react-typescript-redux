import React from 'react'
import FestivalsInput from './FestivalsInput'
import { useSelector, useDispatch } from 'react-redux'
import inputFestival from '../store/Festivals/FestivalActions'
import Header from './Header'
import { RootState } from '../store/rootReducer'
import { FestivalState } from '../store/Festivals/FestivalReducer'
import { Box } from '../styles/styledTheme'

const FestivalsDisplay: React.FC = () => {
  const dispatch = useDispatch()

  const submitFestival = (festive: string) => {
    dispatch(inputFestival(festive))
  }

  // type is correct, but cannot reach state.festives.festivals
  // const festives = useSelector<FestivalState, FestivalState['festivals']>(
  //   (state) => state.festivals
  // )
  const festives = useSelector((state: RootState) => state.festives.festivals)

  return (
    <>
      <Header />
      <Box>
        <h3>Festivals 🎄🕯️🎁🎵🍊</h3>
        <FestivalsInput submitFestival={submitFestival} />
        <hr />
        <ol>
          {festives.map((festive) => {
            return (
              <div key={festive}>
                <li>{festive}</li>
              </div>
            )
          })}
        </ol>
      </Box>
    </>
  )
}

export default FestivalsDisplay
