import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import authReducer from '../features/auth/auth'
import genreuserReducer from '../features/genresbyuser/genreuserSlice'
import bookclubReducer from '../features/bookclub/bookclubSlice'
import profilesReducer from '../features/profile/profileSlice'
import signupformReducer from '../features/auth/signupformSlice'
import genreSelectionReducer from '../features/genreselection/genreSelectionSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    auth: authReducer,
    genreuser: genreuserReducer,
    profileState: profilesReducer,
    userState:profilesReducer,
    bookuserState:profilesReducer,
    genreuserState:profilesReducer,
    bookclub: bookclubReducer,
    genreState:signupformReducer,
    genres:genreSelectionReducer,
  },
})
