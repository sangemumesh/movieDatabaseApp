// eslint-disable-next-line
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import PopularMoviesPage from './pages/PopularMoviesPage'
import TopRatedMoviesPage from './pages/TopRatedMoviesPage'
import UpcomingMoviesPage from './pages/UpcomingMoviesPage'
import SingleMovieDetailsPage from './pages/SingleMovieDetailsPage'
import SearchedMoviesPage from './pages/SearchedMoviesPage'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={PopularMoviesPage} />
        <Route path="/top-rated" component={TopRatedMoviesPage} />
        <Route path="/upcoming" component={UpcomingMoviesPage} />
        <Route path="/single-movie/:id" component={SingleMovieDetailsPage} />
        <Route path="/search" component={SearchedMoviesPage} />
      </Switch>
    </div>
  </Router>
)

export default App
