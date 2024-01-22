// eslint-disable-next-line
import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const SearchedMoviesPage = () => {
  const location = useLocation()
  const searchQuery = new URLSearchParams(location.search).get('query')
  const [searchedMovies, setSearchedMovies] = useState([])

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      try {
        const apiKey = 'YOUR_TMDB_API_KEY' // Replace with your TMDB API key
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1`,
        )

        if (!response.ok) {
          throw new Error('Failed to fetch searched movies')
        }

        const data = await response.json()
        setSearchedMovies(data.results)
      } catch (error) {
        console.error('Error fetching searched movies:', error.message)
      }
    }

    fetchSearchedMovies()
  }, [searchQuery])

  return (
    <div>
      <h2>Searched Movies</h2>
      <div className="movie-grid">
        {searchedMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            {/* Add more movie details as needed */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchedMoviesPage
