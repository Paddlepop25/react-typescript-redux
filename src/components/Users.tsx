import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { fetchUsers } from '../store/Users/UserActions'
import Header from './Header'

const Users = () => {
  const users = useSelector((state: RootState) => state.usersData)
  // console.log('users >>> ', users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return users.loading ? (
    <code>Loading...</code>
  ) : (
    <>
      <Header />
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
              <p>Address: {JSON.stringify(user.address)}</p>
              <p>Phone: {user.phone}</p>
              <hr />
            </div>
          )
        })
      )}
    </>
  )
}

export default Users
