import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AuthRoute from "./features/auth/AuthRoute";
import { Counter } from "./features/counter/Counter";
import Splash  from "./features/splash/Splash";
import { Users } from "./features/users/Users";
import {LoginSignup}  from "./features/auth/Signup";
import Profile from "./features/profile/Profile";
import Signup from "./features/auth/Signup";
import RealTop20 from "./features/realtop20/RealTop20";
import HomePage from "./features/homepage/HomePage";
import About from "./features/about/About";
import BookClub from "./features/bookclub/BookClub";
import GenreSelection from "./features/genreselection/GenreSelection"
import Signupform from "./features/auth/Signupform";
import Search from "./features/search/Search";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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

          <Route path="/genres">
            {/* <Profile />
            <Users /> */}
          </Route>

          <Route path="/top20">
            <BookClub />
            {/* <Signup /> */}
          </Route>

          <AuthRoute path="/search">
            <Search/>
          </AuthRoute>

          <AuthRoute path="/profile">
            <Profile/>
          </AuthRoute>

          <Route path="/login">
            <Signup />
          </Route>

          <AuthRoute path="/signupform">
            <Signupform />
          </AuthRoute>

          {/* <AuthRoute path="/about"> */}
          {/* </AuthRoute> */}
        </Switch>
      </div>
    </Router>
  );
}
