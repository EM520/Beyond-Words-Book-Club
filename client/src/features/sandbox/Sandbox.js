import React from 'react'
import BookClub from '../bookclub/BookClub'
import Search from '../search/SearchResultsPage'
import GenreSelection from '../genreselection/GenreSelection'
import SubmitButton from '../profile/SubmitButton'

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
      <SubmitButton />
    </div>
  )
}
