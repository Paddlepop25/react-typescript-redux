import axios from 'axios'
import { Dispatch } from 'redux'

import {
  ErrorMessage,
  FetchUsersFailureAction,
  FetchUsersRequestAction,
  FetchUsersSuccessAction,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  Users,
} from './UserTypes'

export const fetchUsersRequest = (): FetchUsersRequestAction => ({
  type: FETCH_USERS_REQUEST,
})

export const fetchUsersSuccess = (users: Users): FetchUsersSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
})

export const fetchUsersFailure = (
  errorMsg: ErrorMessage
): FetchUsersFailureAction => ({
  type: FETCH_USERS_FAILURE,
  payload: errorMsg,
})

export const fetchUsers = () => {
  return (dispatch: any) => {
    dispatch(fetchUsersRequest)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data
        // console.log('Users Data >>>' ,users)
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        console.log('ERROR >>>', error)
        const errorMsg = error.message
        dispatch(fetchUsersFailure(errorMsg))
      })
  }
}
