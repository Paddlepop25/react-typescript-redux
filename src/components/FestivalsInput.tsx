import React from 'react'
import ButtonStyle from '../styles/styledButtonTheme'

interface FestivalProps {
  submitFestival: (festive: string) => void
}

const FestivalsInput: React.FC<FestivalProps> = ({ submitFestival }) => {
  const [festival, setFestival] = React.useState('')

  const inputFestival = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFestival(event.target.value)
  }

  const addFestival = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    submitFestival(festival)
    setFestival('')
  }

  return (
    <>
      <label>What's your favourite festival day?</label>
      <br />
      <input
        type='text'
        value={festival}
        onChange={inputFestival}
        placeholder='Gong xi fa cai'
      />
      &nbsp;
      <button onClick={addFestival} disabled={festival === ''}>
        Add festival 🎆
      </button>
      &nbsp;
      <ButtonStyle onClick={addFestival} disabled={festival === ''}>
        Add festival 🎆
      </ButtonStyle>
    </>
  )
}

export default FestivalsInput
