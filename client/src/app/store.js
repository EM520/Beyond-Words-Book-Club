import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
// import usersReducer from '../features/users/usersSlice'
import authReducer from '../features/auth/auth'
import genreuserReducer from '../features/genre/genreuserSlice'
import bookclubReducer from '../features/bookclub/bookclubSlice'
import profilesReducer from '../features/profile/profileSlice'
import signupformReducer from '../features/auth/signupformSlice'

import realTop20Reducer from '../features/realtop20/realTop20Slice'
import searchReducer from '../features/search/searchSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    // users: usersReducer,
    auth: authReducer,
    genreuser: genreuserReducer,
    profileState: profilesReducer,
    signupformState: signupformReducer,
    bookclub: bookclubReducer,
  
    realTop20: realTop20Reducer,
    search: searchReducer,
  },
})
