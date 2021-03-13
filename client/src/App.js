import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AuthRoute from './features/auth/AuthRoute'
import { Counter } from './features/counter/Counter'
import { Users } from './features/users/Users'
import { LoginSignup } from './features/auth/LoginSignup'
import Profile from './features/profile/Profile'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
              
            </li>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Counter />
          </Route>
          <Route path="/login">
            <LoginSignup />
          </Route>
          <Route path="/users">
           <Profile />
           <Users />
          </Route>
          <AuthRoute path="/protected">
            <h2>test</h2>
          </AuthRoute>
        </Switch>
      </div>
    </Router>
  )
}
