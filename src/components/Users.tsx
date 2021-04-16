import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { fetchUsers } from '../store/Users/UserActions'
import { Box } from '../styles/styledTheme'
import Header from './Header'

const Users: React.FC = () => {
  const users = useSelector((state: RootState) => state.usersData)
  console.log('users >>> ', users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return users.loading ? (
    <>
      <Header />
      <Box>
        <code>Loading...</code>
      </Box>
    </>
  ) : (
    <>
      <Header />
      <Box>
        <h2>
          Users from <code>https://jsonplaceholder.typicode.com/users</code>
        </h2>
        {!users || !users.users ? (
          <code>There in an error: {users.error}</code>
        ) : (
          users.users.map((user: any) => {
            return (
              <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                {/* <p>Address: {JSON.stringify(user.address)}</p> */}
                <h4>Company</h4>
                {Object.entries(user.company).map(([key, value]) => {
                  return (
                    <div key={key}>
                      {key} : {value}
                    </div>
                  )
                })}

                <hr />
              </div>
            )
          })
        )}
      </Box>
    </>
  )
}

export default Users

// company:
// bs: "e-enable extensible e-tailers"
// catchPhrase: "Implemented secondary concept"
// name: "Abernathy Group"
