import './app.scss'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Home type="movies" />
        </Route>
        <Route path="/series">
          <Home type="series" />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
