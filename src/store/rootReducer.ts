import { combineReducers } from 'redux'

// reducers
import cakeReducer from './Cake/CakeReducer'
import festivalReducer from './Festivals/FestivalReducer'
import iceCreamReducer from './IceCream/IceCreamReducer'
import userReducer from './Users/UserReducer'
import bugReducer from './Bugs/BugReducer'

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  usersData: userReducer,
  festives: festivalReducer,
  bugs: bugReducer,
})

export type RootState = ReturnType<typeof rootReducer>
