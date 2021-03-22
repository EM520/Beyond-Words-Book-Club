import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'
import styles from './Search.module.css'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
   const history = useHistory()
    // const newKeyword = keyword.replace(' ', '+')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
    history.push({
      pathname: '/search',
     search: `?q=${keyword}`
    })
    setKeyword('')
    window.location.reload()
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


    </div>
  )
}

export default SearchBar