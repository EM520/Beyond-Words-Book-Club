import React from 'react'
import BookClub from '../bookclub/BookClub'
import Search from '../search/SearchResultsPage'
import GenreSelection from '../genreselection/GenreSelection'

export default function Sandbox() {
  function makeRequest() {
    // request.get()
    // request.patch()
  }
  return (
    <div>
      <button onClick={makeRequest}>make request</button>
      <BookClub />
      <Search />
      <GenreSelection />
    </div>
  )
}
