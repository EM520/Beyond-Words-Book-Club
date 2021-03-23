import { createSlice } from "@reduxjs/toolkit"
import request from "../../utils/request";

export const realTop20Slice = createSlice({
  name: "realTop20",
  initialState: {
    realTop20: [],
  },

  reducers: {
    setRealTop20: (state, action) => {
      state.realTop20 = action.payload
    },
  },
})

export const { setRealTop20 } = realTop20Slice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getRealTop20 = (id) => (dispatch) => {
  request.get('/top20').then((r) => {
    console.log(r.data)
    dispatch(setRealTop20(r.data))
  })
}

export const selectTop20 = (state) => state.realTop20.realTop20
export default realTop20Slice.reducer



