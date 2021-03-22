import { createSlice } from '@reduxjs/toolkit'
import request from '../../utils/request'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: [],
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { setSearch } = searchSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getSearch = (query) => (dispatch) => {
  console.table(query,'qu')
    // const sQuery = query.replace(' ', '+')
  request.get('/search'+query)
  .then((r) => {
    dispatch(setSearch(r.data))
  })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectSearch = (state) => state.search.search
export default searchSlice.reducer
