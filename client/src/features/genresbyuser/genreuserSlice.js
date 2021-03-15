import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import request from "../../utils/request";

export const genreuserSlice = createSlice({
  name: 'genreuser',
  initialState: {
    genreuser: [],
},
reducers: {
  setGenreUser: (state, action) => {
    state.genreuser = action.payload
  },

},
})


export const {
setGenreUser,
} = genreuserSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


export const getGenreUser = (state) => (dispatch) => {
request.get('/genres').then((r) => {
  // const action = setUsers(r.data)
  dispatch(setGenreUser(r.data))
})
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectGenreUser = (state) => state.genreuser.genreuser
export default genreuserSlice.reducer