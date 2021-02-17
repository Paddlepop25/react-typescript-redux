import { combineReducers } from 'redux'

// reducers
import cakeReducer from './Cake/CakeReducer'
import iceCreamReducer from './IceCream/IceCreamReducer'
import userReducer from './Users/UserReducer'

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  usersData: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
