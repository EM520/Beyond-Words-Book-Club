// https://ui.dev/react-router-v4-protected-routes-authentication/
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { useAuth } from './auth'

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(
    (appState) => appState.auth.isAuthenticated
  )
  return (
    <Route>{isAuthenticated ? children : <Redirect to="/login" />}</Route>
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     isAuthenticated ? props.children : <Redirect to="/login" />
    //   }
    // />
  )
}

export default PrivateRoute
