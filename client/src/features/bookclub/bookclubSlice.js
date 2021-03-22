import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import request from '../../utils/request'

export const bookclubSlice = createSlice({
  name: 'bookclub',
  initialState: {
    bookclub: [],
    discussion: [],
    userbookcollections: [],
  },
  reducers: {
    setBookClub: (state, action) => {
      state.bookclub = action.payload
    },
    setDiscussion: (state, action) => {
      state.discussion = action.payload
    },
    setUserBookCollections: (state, action) => {
      state.userbookcollections = action.payload
    },

  },
})

export const { setBookClub, setDiscussion, setUserBookCollections} = bookclubSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getBookClub = (id) => (dispatch) => {
  console.log(id, 'ac-id')
  axios.get('/api/books/' + id).then((r) => {
    dispatch(setBookClub(r.data))
  })
}



export const getUserBookCollections = (bookId) => (dispatch) => {
  // const id = 1
  request.get('/book-collections/'+bookId).then((r) => {
    console.log(r.data, 'ubc1')
    dispatch(setUserBookCollections(r.data))
  })
}

export const getDiscussion = (id) => (dispatch) => {
  console.log(id, 'id')
  axios.get('/api/discussions/' + id).then((r) => {
    console.log(r.data, 'disc')

    dispatch(setDiscussion(r.data))
  })
}

export const addDiscussion = (obj) => (dispatch) => {
  console.log(obj, 'obj')
  // debugger

  request
    .post('/discussions', {
      discussion: obj.discussion,
      parent_id: obj.parent_id,
      group_id: obj.group_id,
    })
    .then((resp) => {
      console.log(resp, 'add discussion')
      dispatch(getDiscussion(obj.group_id))
    })
    

    
}


export const addUserBookCollection = (id) => (dispatch) => {
  console.log(id, 'add book')
  request
  .post('/book-collections', {book_id: id })
  .then((resp) => {
    console.log(resp, 'add userbook')
    // dispatch(getDiscussion(obj.group_id))

  })
  }


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectBookClub = (state) => state.bookclub.bookclub
export const selectDiscussion = (state) => state.bookclub.discussion
export const selectUserBookCollections = (state) => state.bookclub.userbookcollections

export default bookclubSlice.reducer