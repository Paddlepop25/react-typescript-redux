import React from 'react'
import FestivalsInput from './FestivalsInput'
import { useSelector, useDispatch } from 'react-redux'
import inputFestival from '../store/Festivals/FestivalActions'
import Header from './Header'
import { RootState } from '../store/rootReducer'
import { FestivalState } from '../store/Festivals/FestivalReducer'

const FestivalsDisplay = () => {
  const dispatch = useDispatch()

  const submitFestival = (festive: string) => {
    dispatch(inputFestival(festive))
  }

  // const festives = useSelector<FestivalState, FestivalState['festivals']>((state: RootState) => state.festives.festivals)
  const festives = useSelector((state: RootState) => state.festives.festivals)

  return (
    <>
      <Header />
      <h3>Festivals 🎄🕯️🎁🎵🧑‍🚒</h3>
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
    </>
  )
}

export default FestivalsDisplay
