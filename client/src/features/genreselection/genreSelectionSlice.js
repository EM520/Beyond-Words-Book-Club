import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import request from '../../utils/request'

export const genreSelectionSlice = createSlice({
  name: 'genres',
  initialState: {
    genres: [],
   selectedGenres:[],
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload
    },
    setUserGenres: (state, action) => {
      state.genres = action.payload
    },
  },
})

export const { setGenres,setUserGenres } = genreSelectionSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getGenres = () => (dispatch) => {
  request.get('/genres').then((r) => {
    console.log(r.data)
    //   const action = setUsers(r.data)
    dispatch(setGenres(r.data))
  })
}


export const getUserGenres = () => (dispatch) => {
  
  request.get("/genres/user").then((r) => {
    console.log(r.data)
    dispatch(setUserGenres(r.data));
  });
};

export const addUserGenres = (selectedGenres) => (dispatch) => {
  
  request.post('/genres/user/',{selectedGenres}).then((r) => {
    console.log(selectedGenres)
    dispatch(getUserGenres(selectedGenres))
  })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectGenres = (state) => state.genreSlectionState.genres
export const selectUserGenre = (state) => state.genreSlectionState.selectedGenres
export default genreSelectionSlice.reducer
