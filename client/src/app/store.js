import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import authReducer from '../features/auth/auth'

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    auth: authReducer,
  },
})
