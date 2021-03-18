import React from 'react'
import BookClub from '../bookclub/BookClub'
import Search from '../search/Search'
import GenreSelection from '../genreselection/GenreSelection'

export default function Sandbox() {
  return (
    <div>
      <BookClub />
      <Search />
      <GenreSelection />
    </div>
  )
}
