import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthRoute from './features/auth/AuthRoute'
import NavBar from './features/headerfooter/NavBar'
import Footer from './features/headerfooter/Footer'
import Splash from './features/splash/Splash'
import Profile from './features/profile/Profile'
import Signup from './features/auth/Signup'
import Sandbox from './features/sandbox/Sandbox'
import RealTop20 from './features/realtop20/RealTop20'
import HomePage from './features/homepage/HomePage'
import About from './features/about/About'
import BookClub from './features/bookclub/BookClub'
import SearchResultsPage from './features/search/SearchResultsPage'
import Signupform from './features/auth/Signupform'
import './App.css'

export default function App() {
  return (
    <Router>
      <div class="main">
      <NavBar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="container">
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          {/* todo convert to dropdown */}
          <Route path="/genres"></Route>

          <Route path="/top20">
            <RealTop20 />
          </Route>

          <Route path="/book-club/:id">
            <BookClub />
          </Route>

          <Route path="/search">
            <SearchResultsPage />
          </Route>

          <Route path="/sandbox">
            <Sandbox />
          </Route>

          <AuthRoute path="/profile">
            <Profile />
          </AuthRoute>

          <Route path="/login">
            <Signup />
          </Route>

          <Route path="/signupform">
            <Signupform />
          </Route>
        </Switch>
        </div>
        <Footer />
        </div>
    </Router>
  )
}
