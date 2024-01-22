// eslint-disable-next-line
import React, {useState, useEffect} from 'react'

const UpcomingMoviesPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const apiKey = 'YOUR_TMDB_API_KEY' // Replace with your TMDB API key
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
        )

        if (!response.ok) {
          throw new Error('Failed to fetch upcoming movies')
        }

        const data = await response.json()
        setUpcomingMovies(data.results)
      } catch (error) {
        console.error('Error fetching upcoming movies:', error.message)
      }
    }

    fetchUpcomingMovies()
  }, [])

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <div className="movie-grid">
        {upcomingMovies.map(movie => (
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

export default UpcomingMoviesPage
