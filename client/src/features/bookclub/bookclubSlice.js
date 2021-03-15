import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// import request from "../../utils/request";

export const bookclubSlice = createSlice({
  name: "bookclub",
  initialState: {
    bookclub: [],
  },
  reducers: {
    setBookClub: (state, action) => {
      state.bookclub = action.payload
    },
  },
})

export const { setBookClub } = bookclubSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getBookClub = (id) => (dispatch) => {
    // const id = 1
    console.log(setBookClub, id, "/bookclub/"+ id, 'ac')
  axios.get("/api/bookclub/"+ id).then((r) => {
    dispatch(setBookClub(r.data))
  })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectBookClub = (state) => state.bookclub.bookclub
export default bookclubSlice.reducer
