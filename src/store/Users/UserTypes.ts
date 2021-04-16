export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export interface Users {
  users: []
}

export interface ErrorMessage {
  error: string
}

export interface FetchUsersRequestAction {
  type: string
}

export interface FetchUsersSuccessAction {
  type: string
  payload: Users
}

export interface FetchUsersFailureAction {
  type: string
  payload: ErrorMessage
}

// interface Payload {
//   loading: boolean
//   users: []
//   error: string
// }

export interface UserAction {
  type: string
  payload: any // meh?
}
