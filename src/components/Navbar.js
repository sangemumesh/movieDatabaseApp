// eslint-disable-next-line
import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    // Implement search functionality based on the searchQuery
    console.log('Searching for:', searchQuery)
  }

  return (
    <nav>
      <Link to="/">movieDB</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>

      {/* Search bar and button */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Conditionally render View Details button based on the active page */}
      {(location.pathname === '/upcoming' ||
        location.pathname === '/top-rated') && (
        <button type="button">View Details</button>
      )}
    </nav>
  )
}

export default Navbar
