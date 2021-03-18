import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import request from '../../utils/request'

export const realTop20Slice = createSlice({
  name: 'realTop20',
  initialState: {
    realTop20: [],
  },

  reducers: {
    setRealTop20: (state, action) => {
      state.realTop20 = action.payload
    },
    setDiscussion: (state, action) => {
      state.discussion = action.payload
    },
  },
})

export const { setRealTop20, setDiscussion } = realTop20Slice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getrealTop20 = (id) => (dispatch) => {
  // const id = 1
  console.log(setRealTop20, id, '/realTop20/' + id, 'ac')
  axios.get('/api/realTop20/' + id).then((r) => {
    dispatch(setRealTop20(r.data))
  })
}

export const getDiscussion = (id) => (dispatch) => {
  console.log(id, 'id')
  axios.get('/api/discussions/' + id).then((r) => {
    dispatch(setDiscussion(r.data))
    console.log(r.data, 'disc')
  })
}

// export const addDiscussion = (obj) => (dispatch) => {
//     console.log(obj.parent, 'obj')
//     // debugger

//     request.post("/discussions", { discussion: obj.comment, parent_id: obj.parent, group_id: obj.groupid  })
//     .then((resp) => {
//         console.log(resp, "add discussion")
//         dispatch(getDiscussion())
//       })
//     }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectRealTop20 = (state) => state.realTop20.realTop20
// export const selectDiscussion = (state) => state.realTop20.discussion
export default realTop20Slice.reducer
