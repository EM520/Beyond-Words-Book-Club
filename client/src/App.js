import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AuthRoute from './features/auth/AuthRoute'
import { SplashPage } from './splashPage/SplashPage'
import { Counter } from './features/counter/Counter'
import { Users } from './features/users/Users'
import { LoginSignup } from './features/auth/LoginSignup'
import Profile from './features/profile/Profile'
import Signup from './features/signup/Signup'
import HomePage from './features/homepage/HomePage'

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
              <Link to="/about">About</Link>
              {/* <Profile /> */}
            </li>
            <li>
              <Link to="/protected">List of Genres</Link>
            </li>
            <li>
              <Link to="/protected">Top 20 Book Clubs</Link>
            </li>
            <li>
              <Link to="/protected">Profile</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/splash">
            <SplashPage />
          </Route>
          <Route path="/login">
            <LoginSignup />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <AuthRoute path="/protected">
            <h2>test</h2>
          </AuthRoute>
        </Switch>
      </div>
    </Router>
  )
}
