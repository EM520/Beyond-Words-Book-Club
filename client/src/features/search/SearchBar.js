import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'

import styles from './Search.module.css'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
   const history = useHistory()
    const newKeyword = keyword.replace(' ', '+')
    console.log(newKeyword, 'nk')
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push({
      pathname: '/search',
     search: `?q=${newKeyword}`
    })
  }

  return (
    <div className="bar">
    <form onSubmit={(e) => handleSubmit(e)}>  
      <input
      autoFocus
        className={styles.BarStyling}
        value={keyword}
        placeholder={'Search author, genre or book'}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
    {/* {display ? <SearchResultsPage query={keyword} /> : null} */}


    </div>
  )
}

export default SearchBar