import React from 'react'
import BookClub from '../bookclub/BookClub'
import Search from '../search/SearchResultsPage'



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
      
     
    </div>
  )
}
