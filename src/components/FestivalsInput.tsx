import React from 'react'

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
        placeholder='Gong xi fa cai 🍊🍊'
      />
      &nbsp;
      <button onClick={addFestival}>Add festival 🎆</button>
    </>
  )
}

export default FestivalsInput
