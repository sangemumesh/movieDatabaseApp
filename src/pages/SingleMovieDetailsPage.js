// eslint-disable-next-line
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const SingleMovieDetailsPage = () => {
  const {id} = useParams()
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = 'YOUR_TMDB_API_KEY' // Replace with your TMDB API key
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
        )

        if (!response.ok) {
          throw new Error('Failed to fetch movie details')
        }

        const data = await response.json()
        setMovieDetails(data)
      } catch (error) {
        console.error('Error fetching movie details:', error.message)
      }
    }

    fetchMovieDetails()
  }, [id])

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      {/* Display movie details, such as image, ratings, duration, genre, release date, and overview */}
      {/* Fetch and display cast details using another API call if needed */}
    </div>
  )
}

export default SingleMovieDetailsPage
