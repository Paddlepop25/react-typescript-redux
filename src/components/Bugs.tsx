import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { Box } from '../styles/styledTheme'
import Header from './Header'

const Bugs: React.FC = () => {
  const [bug, setBug] = React.useState('')

  const bugInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBug(event.target.value)
  }
  const dispatch = useDispatch()

  const bugs = useSelector((state: RootState) => state.bugs)
  console.log(bugs)

  const addBug = (description: string) => {
    description === ''
      ? alert('Please add a bug')
      : dispatch(addBug(description)) // MAXIMUM STACK CALL
    setBug('')
    console.log(description)
  }

  return (
    <>
      <Header />
      <Box>
        <h3>Bugs 🐛</h3>
        <input
          type='text'
          value={bug}
          onChange={bugInput}
          placeholder='name your bug 🕷️'
        />
        &nbsp;
        <button onClick={() => addBug(bug)}>Add bug</button>
        <button>Resolve bug</button>
        <button>Delete bug</button>
        <hr />
        {/* {bugs.map((bug) => {
        return (
          <div key={bug.id}>
            <p>Id: {bug.id}</p>
            <p>Description: {bug.description}</p>
            <p>Resolved: {bug.resolved}</p>
          </div>
        )
      })} */}
      </Box>
    </>
  )
}

export default Bugs
