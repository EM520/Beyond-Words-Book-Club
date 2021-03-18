import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div className="bar">
      <input
        className={styles.BarStyling}
        key="random1"
        value={keyword}
        placeholder={'Search author, genre or book'}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
