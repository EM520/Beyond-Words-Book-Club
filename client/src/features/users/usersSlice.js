import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: 0,
    users: [
      { id: 1, name: 'Douglas' },
      { id: 2, name: 'John' },
    ],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
  },
})

// console.log(users)

export const {
  increment,
  decrement,
  incrementByAmount,
  setUsers,
} = usersSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// function setUsers(value) {
//   return {
//     type: 'users/setUsers',
//     payload: value,
//   }
// }

export const getUsers = () => (dispatch) => {
  axios.get('/api/users').then((r) => {
    // const action = setUsers(r.data)
    dispatch(setUsers(r.data))
  })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectCount = (state) => state.users.value
export const selectUsers = (state) => state.users.users
export default usersSlice.reducer
