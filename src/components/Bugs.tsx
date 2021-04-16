import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBug, deleteBug, updateBug } from '../store/Bugs/BugAction'
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
  // console.log(bugs)

  const bugAdded = (description: string) => {
    description === ''
      ? alert('Please add a bug')
      : dispatch(addBug(description)) // MAXIMUM STACK CALL
    setBug('')
    // console.log(description)
  }

  const bugResolved = (id: number) => {
    dispatch(updateBug(id))
  }

  const bugDeleted = (id: number) => {
    dispatch(deleteBug(id))
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
        <button onClick={() => bugAdded(bug)}>Add bug</button>
        <hr />
        {bugs.map((bug) => {
          if (bug.id !== 0)
            return (
              <div key={bug.id}>
                <p>Id: {bug.id}</p>
                <p>Description: {bug.description}</p>
                <p>Resolved: {bug.resolved.toString()}</p>
                <button
                  onClick={() => bugResolved(bug.id)}
                  disabled={bug.resolved}
                >
                  Resolve bug
                </button>
                &nbsp;
                <button onClick={() => bugDeleted(bug.id)}>Delete bug</button>
              </div>
            )
        })}
      </Box>
    </>
  )
}

export default Bugs
